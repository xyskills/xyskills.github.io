"""
Gojo Satoru — Unlimited Void / Infinite Void Domain Expansion
Blender Python script (Blender 3.6+ / 4.x)

Run from the command line:
  blender --background --python blender/gojo_domain_expansion.py

Or paste into Blender's Text Editor (Scripting workspace) and press Run.

Output: PNG sequence → //render/domain_expansion/frame_####.png  (120 frames @ 24 fps = 5 seconds)

The frames can then be used as a VideoTexture in Three.js:
  const video = document.createElement('video')
  video.src = 'domain_expansion.webm'        // encode the PNG sequence with ffmpeg
  const tex  = new THREE.VideoTexture(video)

FFMPEG encode command (run after rendering):
  ffmpeg -r 24 -i render/domain_expansion/frame_%04d.png \
         -c:v libvpx-vp9 -crf 30 -b:v 0 -pix_fmt yuva420p \
         public/videos/domain_expansion.webm
"""

import bpy
import math
import os

# ── Helpers ───────────────────────────────────────────────────────────────────

def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
    for col in bpy.data.collections:
        bpy.data.collections.remove(col)


def new_material(name: str) -> bpy.types.Material:
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    mat.node_tree.nodes.clear()
    return mat


def add_emission(mat: bpy.types.Material, color: tuple, strength: float) -> bpy.types.Node:
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    emit  = nodes.new('ShaderNodeEmission')
    emit.inputs['Color'].default_value    = (*color, 1.0)
    emit.inputs['Strength'].default_value = strength
    out = nodes.new('ShaderNodeOutputMaterial')
    links.new(emit.outputs['Emission'], out.inputs['Surface'])
    return emit


# ── Scene setup ───────────────────────────────────────────────────────────────

clear_scene()

scene = bpy.context.scene
scene.render.engine               = 'CYCLES'
scene.cycles.samples              = 64
scene.cycles.use_denoising        = True
scene.render.resolution_x        = 1920
scene.render.resolution_y        = 1080
scene.render.fps                  = 24
scene.frame_start                 = 1
scene.frame_end                   = 120
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_mode  = 'RGBA'

output_dir = os.path.join(os.path.dirname(bpy.data.filepath) or '/tmp',
                          'render', 'domain_expansion')
os.makedirs(output_dir, exist_ok=True)
scene.render.filepath = os.path.join(output_dir, 'frame_####')

# Film — transparent background (will composite over camera feed)
scene.render.film_transparent = True
scene.world = bpy.data.worlds.new('VoidWorld')
scene.world.use_nodes = True
bg = scene.world.node_tree.nodes['Background']
bg.inputs['Color'].default_value    = (0.97, 0.97, 1.0, 1.0)
bg.inputs['Strength'].default_value = 0.4

# ── Camera ────────────────────────────────────────────────────────────────────

bpy.ops.object.camera_add(location=(0, -8, 0), rotation=(math.radians(90), 0, 0))
cam = bpy.context.active_object
cam.data.lens = 35
scene.camera = cam

# ── Background plane (white void) ─────────────────────────────────────────────

bpy.ops.mesh.primitive_plane_add(size=30, location=(0, 0, -2))
bg_plane = bpy.context.active_object
bg_plane.name = 'VoidBackground'

mat_bg = new_material('VoidBackground')
nodes  = mat_bg.node_tree.nodes
links  = mat_bg.node_tree.links

# White emission + slight blue tint at edges using a gradient
tex_coord = nodes.new('ShaderNodeTexCoord')
mapping   = nodes.new('ShaderNodeMapping')
gradient  = nodes.new('ShaderNodeTexGradient')
gradient.gradient_type = 'RADIAL'
color_ramp = nodes.new('ShaderNodeValToRGB')
color_ramp.color_ramp.color_mode = 'RGB'
color_ramp.color_ramp.elements[0].position = 0.0
color_ramp.color_ramp.elements[0].color    = (0.97, 0.97, 1.00, 1.0)
color_ramp.color_ramp.elements[1].position = 1.0
color_ramp.color_ramp.elements[1].color    = (0.02, 0.01, 0.12, 1.0)

emit_bg = nodes.new('ShaderNodeEmission')
emit_bg.inputs['Strength'].default_value = 1.5
out_bg  = nodes.new('ShaderNodeOutputMaterial')

links.new(tex_coord.outputs['Generated'], mapping.inputs['Vector'])
links.new(mapping.outputs['Vector'],      gradient.inputs['Vector'])
links.new(gradient.outputs['Color'],      color_ramp.inputs['Fac'])
links.new(color_ramp.outputs['Color'],    emit_bg.inputs['Color'])
links.new(emit_bg.outputs['Emission'],    out_bg.inputs['Surface'])

bg_plane.data.materials.append(mat_bg)

# ── Geometric line system — radial spokes ────────────────────────────────────

def build_radial_spoke(angle_deg: float, length: float, width: float) -> bpy.types.Object:
    """One thin plane strip radiating from the centre."""
    bpy.ops.mesh.primitive_plane_add(size=1)
    obj = bpy.context.active_object
    obj.scale = (width, length / 2, 0.001)
    obj.location = (0, length / 4, -1.5)

    mat = new_material(f'Spoke_{angle_deg:.0f}')
    emit_node = add_emission(mat, (0.04, 0.02, 0.22), 2.5)
    # Animate opacity via emission strength (fade in during first 2 seconds)
    emit_node.inputs['Strength'].default_value = 0
    emit_node.inputs['Strength'].keyframe_insert('default_value', frame=1)
    emit_node.inputs['Strength'].default_value = 2.5
    emit_node.inputs['Strength'].keyframe_insert('default_value', frame=48)

    obj.data.materials.append(mat)
    obj.rotation_euler[2] = math.radians(angle_deg)
    return obj


NUM_SPOKES = 72
for k in range(NUM_SPOKES):
    build_radial_spoke(k * (360 / NUM_SPOKES), length=14.0, width=0.015)

# ── Concentric rings ─────────────────────────────────────────────────────────

def build_ring(radius: float, thickness: float, z: float = -1.4) -> bpy.types.Object:
    bpy.ops.curve.primitive_bezier_circle_add(radius=radius, location=(0, 0, z))
    obj  = bpy.context.active_object
    obj.name = f'Ring_r{radius:.2f}'
    obj.data.bevel_depth  = thickness
    obj.data.bevel_resolution = 4
    obj.data.resolution_u = 64

    mat = new_material(f'Ring_{radius:.2f}')
    add_emission(mat, (0.04, 0.02, 0.22), 2.0)
    obj.data.materials.append(mat)

    # Animate: rings drift inward over time (scale from 1.2 → 0.0 cyclically)
    obj.scale = (1.2, 1.2, 1.2)
    obj.scale.__class__  # just referencing to trigger no-op
    return obj


RING_RADII = [0.3, 0.55, 0.85, 1.2, 1.6, 2.1, 2.7, 3.4, 4.2, 5.2, 6.3, 7.5]
for i, r in enumerate(RING_RADII):
    ring = build_ring(r, thickness=0.005)
    # Stagger fade-in
    fade_start = 1 + i * 4
    for mat in ring.data.materials:
        emit = mat.node_tree.nodes['Emission']
        emit.inputs['Strength'].default_value = 0
        emit.inputs['Strength'].keyframe_insert('default_value', frame=fade_start)
        emit.inputs['Strength'].default_value = 2.0
        emit.inputs['Strength'].keyframe_insert('default_value', frame=fade_start + 20)

# ── Floating symbol orbs ─────────────────────────────────────────────────────

SYMBOL_POSITIONS = [
    (0.8, 0.0, -1.3), (-0.8, 0.0, -1.3),
    (0.0, 0.8, -1.3), (0.0, -0.8, -1.3),
    (1.5, 1.1, -1.3), (-1.5, 1.1, -1.3),
    (1.5, -1.1, -1.3), (-1.5, -1.1, -1.3),
    (2.5, 0.0, -1.3), (-2.5, 0.0, -1.3),
    (0.0, 2.5, -1.3), (0.0, -2.5, -1.3),
    (1.8, 2.2, -1.3), (-1.8, 2.2, -1.3),
    (1.8, -2.2, -1.3), (-1.8, -2.2, -1.3),
]

for idx, pos in enumerate(SYMBOL_POSITIONS):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=0.04, location=pos, segments=8, ring_count=6)
    orb = bpy.context.active_object
    orb.name = f'Symbol_{idx}'

    mat_orb = new_material(f'Symbol_{idx}')
    emit_orb = add_emission(mat_orb, (0.55, 0.72, 1.0), 8.0)
    orb.data.materials.append(mat_orb)

    # Orbit animation: rotate around Z axis
    orbit_radius = math.sqrt(pos[0]**2 + pos[1]**2) or 0.5
    orbit_speed  = 0.8 + (idx % 4) * 0.15
    for frame in range(1, 121, 6):
        angle = math.radians((frame / 120) * 360 * orbit_speed + idx * 22.5)
        orb.location = (
            math.cos(angle) * orbit_radius,
            math.sin(angle) * orbit_radius,
            pos[2],
        )
        orb.keyframe_insert('location', frame=frame)

    # Fade in with stagger
    emit_orb.inputs['Strength'].default_value = 0
    emit_orb.inputs['Strength'].keyframe_insert('default_value', frame=1)
    emit_orb.inputs['Strength'].default_value = 8.0
    emit_orb.inputs['Strength'].keyframe_insert('default_value', frame=30 + idx * 3)

# ── Centre singularity — blinding white point ─────────────────────────────────

bpy.ops.mesh.primitive_uv_sphere_add(radius=0.12, location=(0, 0, -1.2), segments=16, ring_count=8)
core = bpy.context.active_object
core.name = 'CoreSingularity'

mat_core = new_material('Core')
emit_core = add_emission(mat_core, (1.0, 1.0, 1.0), 30.0)
# Pulsing core — animate strength
for frame in range(1, 121):
    pulse = 30.0 + 10.0 * math.sin(frame * 0.25)
    emit_core.inputs['Strength'].default_value = pulse
    emit_core.inputs['Strength'].keyframe_insert('default_value', frame=frame)
core.data.materials.append(mat_core)

# ── Slow global rotation — empty parent for all geometry ─────────────────────

bpy.ops.object.empty_add(type='PLAIN_AXES', location=(0, 0, 0))
pivot = bpy.context.active_object
pivot.name = 'VoidPivot'

# Rotate 15 degrees over 120 frames (very slow, adds depth)
pivot.rotation_euler[2] = 0
pivot.keyframe_insert('rotation_euler', frame=1)
pivot.rotation_euler[2] = math.radians(15)
pivot.keyframe_insert('rotation_euler', frame=120)

# Parent spokes and rings to pivot (they'll inherit the slow rotation)
for obj in bpy.data.objects:
    if obj.name.startswith(('Spoke_', 'Ring_')) and obj != pivot:
        obj.parent = pivot

# ── Compositor — add bloom / glare ───────────────────────────────────────────

scene.use_nodes = True
tree  = scene.node_tree
nodes = tree.nodes
links = tree.links
nodes.clear()

render_layers = nodes.new('CompositorNodeRLayers')
glare         = nodes.new('CompositorNodeGlare')
glare.glare_type = 'FOG_GLOW'
glare.quality    = 'HIGH'
glare.threshold  = 0.8
glare.size       = 8
glare.mix        = 0.6

composite = nodes.new('CompositorNodeComposite')
viewer    = nodes.new('CompositorNodeViewer')

links.new(render_layers.outputs['Image'], glare.inputs['Image'])
links.new(glare.outputs['Image'],         composite.inputs['Image'])
links.new(glare.outputs['Image'],         viewer.inputs['Image'])

# ── Interpolation — all animation curves use LINEAR ──────────────────────────

for obj in bpy.data.objects:
    if obj.animation_data and obj.animation_data.action:
        for fcurve in obj.animation_data.action.fcurves:
            for kp in fcurve.keyframe_points:
                kp.interpolation = 'LINEAR'

for mat in bpy.data.materials:
    if mat.node_tree and mat.animation_data and mat.animation_data.action:
        for fcurve in mat.animation_data.action.fcurves:
            for kp in fcurve.keyframe_points:
                kp.interpolation = 'LINEAR'

# ── Render ────────────────────────────────────────────────────────────────────

print(f'\n[Gojo Domain Expansion] Rendering 120 frames to: {output_dir}')
print('[Gojo Domain Expansion] After render, encode with:')
print(f'  ffmpeg -r 24 -i "{output_dir}/frame_%04d.png" \\')
print('         -c:v libvpx-vp9 -crf 28 -b:v 0 -pix_fmt yuva420p \\')
print('         public/videos/domain_expansion.webm\n')

bpy.ops.render.render(animation=True)
print('[Gojo Domain Expansion] Done.')
