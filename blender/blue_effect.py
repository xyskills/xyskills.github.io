"""
Lapse: Blue — Cursed Technique Gravitational Singularity
Blender 3.6+ / 4.x render script.

Run:
  blender --background --python blender/blue_effect.py

Output: render/blue_effect/frame_####.png  (90 frames @ 30 fps = 3 sec loop)

Encode transparent VP9 WebM for Three.js:
  ffmpeg -r 30 -i render/blue_effect/frame_%04d.png \\
         -c:v libvpx-vp9 -crf 28 -b:v 0 -pix_fmt yuva420p \\
         public/videos/effects/blue_effect.webm
"""

import bpy, math, os, random

# ── Helpers ───────────────────────────────────────────────────────────────────

def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
    for c in list(bpy.data.collections):
        bpy.data.collections.remove(c)

def normalize3(v):
    l = math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])
    return (v[0]/l, v[1]/l, v[2]/l) if l > 1e-6 else (0.0, 0.0, 1.0)

def perp_vector(d):
    p = (0.0, -d[2], d[1]) if abs(d[0]) < abs(d[1]) else (-d[2], 0.0, d[0])
    return normalize3(p)

def lerp3(a, b, t):
    return (a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t, a[2]+(b[2]-a[2])*t)

def add3(a, b):   return (a[0]+b[0], a[1]+b[1], a[2]+b[2])
def scale3(v, s): return (v[0]*s, v[1]*s, v[2]*s)

def make_lightning(start, end, segments=14, disp=0.28, thickness=0.018, rng=None):
    """Create a jagged lightning arc as a Blender POLY curve."""
    if rng is None: rng = random
    dx,dy,dz = end[0]-start[0], end[1]-start[1], end[2]-start[2]
    length = math.sqrt(dx*dx+dy*dy+dz*dz)
    if length < 1e-4: return None
    direction = normalize3((dx,dy,dz))
    p1 = perp_vector(direction)
    p2 = normalize3((
        direction[1]*p1[2]-direction[2]*p1[1],
        direction[2]*p1[0]-direction[0]*p1[2],
        direction[0]*p1[1]-direction[1]*p1[0]
    ))
    pts = [start]
    for i in range(1, segments):
        t = i/segments
        base = lerp3(start, end, t)
        fade = 1.0 - abs(t-0.5)*1.8
        d1 = rng.gauss(0, disp*max(0, fade))
        d2 = rng.gauss(0, disp*max(0, fade)*0.5)
        pts.append(add3(base, add3(scale3(p1,d1), scale3(p2,d2))))
    pts.append(end)
    cd = bpy.data.curves.new('ArcCurve','CURVE')
    cd.dimensions = '3D'
    cd.bevel_depth = thickness
    cd.bevel_resolution = 2
    sp = cd.splines.new('POLY')
    sp.points.add(len(pts)-1)
    for i,p in enumerate(pts): sp.points[i].co = (*p, 1.0)
    obj = bpy.data.objects.new('Arc', cd)
    bpy.context.collection.objects.link(obj)
    return obj

def emission_mat(name, color, strength, blend='ADD'):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    mat.node_tree.nodes.clear()
    nodes,links = mat.node_tree.nodes, mat.node_tree.links
    em = nodes.new('ShaderNodeEmission')
    em.inputs['Color'].default_value = (*color, 1.0)
    em.inputs['Strength'].default_value = strength
    out = nodes.new('ShaderNodeOutputMaterial')
    links.new(em.outputs['Emission'], out.inputs['Surface'])
    mat.blend_method = blend
    return mat

def gradient_mat(name, near_col, far_col, strength, max_dist):
    """Emission material that grades from near_col (at origin) to far_col (at max_dist)."""
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    mat.node_tree.nodes.clear()
    nodes,links = mat.node_tree.nodes, mat.node_tree.links
    geom = nodes.new('ShaderNodeNewGeometry')
    vlen = nodes.new('ShaderNodeVectorMath')
    vlen.operation = 'LENGTH'
    div  = nodes.new('ShaderNodeMath')
    div.operation = 'DIVIDE'
    div.inputs[1].default_value = max_dist
    ramp = nodes.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].position = 0.0
    ramp.color_ramp.elements[0].color    = (*near_col, 1.0)
    ramp.color_ramp.elements[1].position = 1.0
    ramp.color_ramp.elements[1].color    = (*far_col, 1.0)
    em  = nodes.new('ShaderNodeEmission')
    em.inputs['Strength'].default_value = strength
    out = nodes.new('ShaderNodeOutputMaterial')
    links.new(geom.outputs['Position'], vlen.inputs[0])
    links.new(vlen.outputs['Value'], div.inputs[0])
    links.new(div.outputs['Value'], ramp.inputs['Fac'])
    links.new(ramp.outputs['Color'], em.inputs['Color'])
    links.new(em.outputs['Emission'], out.inputs['Surface'])
    mat.blend_method = 'ADD'
    return mat

# ── Scene ─────────────────────────────────────────────────────────────────────

clear_scene()
scene = bpy.context.scene
scene.render.fps = 30
scene.frame_start,scene.frame_end = 1, 90
scene.render.resolution_x = 1920
scene.render.resolution_y = 1080
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_mode  = 'RGBA'
scene.render.film_transparent = True

out_dir = os.path.join(os.path.dirname(bpy.data.filepath) or '/tmp', 'render','blue_effect')
os.makedirs(out_dir, exist_ok=True)
scene.render.filepath = os.path.join(out_dir, 'frame_####')

# Engine
if bpy.app.version >= (4,0,0):
    scene.render.engine = 'BLENDER_EEVEE_NEXT'
    scene.eevee.use_bloom         = True
    scene.eevee.bloom_threshold   = 0.4
    scene.eevee.bloom_radius      = 7.0
    scene.eevee.bloom_intensity   = 1.5
    scene.eevee.taa_render_samples = 64
else:
    scene.render.engine = 'CYCLES'
    scene.cycles.samples = 96
    scene.cycles.use_denoising = True

# World — very dark navy
world = bpy.data.worlds.new('W')
world.use_nodes = True
scene.world = world
world.node_tree.nodes['Background'].inputs['Color'].default_value    = (0.0, 0.01, 0.05, 1.0)
world.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.15

# Camera — orthographic, looking along -Y toward the orb
bpy.ops.object.camera_add(location=(0,-8,0), rotation=(math.radians(90),0,0))
cam = bpy.context.active_object
cam.data.type = 'ORTHO'
cam.data.ortho_scale = 4.0   # shows ±2 world units — fills frame with orb + glow
scene.camera = cam

# ── Effect geometry ───────────────────────────────────────────────────────────

# White-teal core
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.20, location=(0,0,0), segments=32, ring_count=16)
core = bpy.context.active_object
core.name = 'BlueCore'
core.data.materials.append(emission_mat('BlueCore', (0.65,0.95,1.0), 90.0, 'ADD'))

# Glow layer 1 — tight teal halo
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.42, location=(0,0,0), segments=24, ring_count=12)
g1 = bpy.context.active_object; g1.name='BG1'
g1.data.materials.append(emission_mat('BG1', (0.05,0.65,1.0), 14.0))

# Glow layer 2 — mid blue
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.88, location=(0,0,0), segments=20, ring_count=10)
g2 = bpy.context.active_object; g2.name='BG2'
g2.data.materials.append(emission_mat('BG2', (0.01,0.18,0.80), 5.0))

# Glow layer 3 — outer deep-blue atmosphere
bpy.ops.mesh.primitive_uv_sphere_add(radius=1.65, location=(0,0,0), segments=16, ring_count=8)
g3 = bpy.context.active_object; g3.name='BG3'
g3.data.materials.append(emission_mat('BG3', (0.0,0.04,0.28), 1.8))

# Point light
bpy.ops.object.light_add(type='POINT', location=(0,0,0))
light = bpy.context.active_object; light.name='BlueLight'
light.data.color  = (0.2,0.75,1.0)
light.data.energy = 9000.0

# 8 inward-flowing electric arcs (from ~1.8 units out → core)
arc_rng = random.Random(42)
ARCS = []
for k in range(8):
    angle = k * math.pi / 4 + arc_rng.uniform(-0.15, 0.15)
    r = 1.75 + arc_rng.uniform(-0.25, 0.25)
    start = (math.cos(angle)*r, math.sin(angle)*r, arc_rng.uniform(-0.35,0.35))
    end   = (arc_rng.uniform(-0.04,0.04), arc_rng.uniform(-0.04,0.04), 0)
    arc = make_lightning(start, end, segments=15, disp=0.26, thickness=0.016, rng=arc_rng)
    if arc:
        arc.data.materials.append(gradient_mat(
            f'ArcMat{k}',
            near_col=(1.0,1.0,1.0), far_col=(0.05,0.6,1.0),
            strength=18.0, max_dist=r+0.4
        ))
        ARCS.append(arc)

# 4 secondary micro-arcs (thinner, different angles)
for k in range(4):
    angle = k * math.pi/2 + math.pi/8 + arc_rng.uniform(-0.2,0.2)
    r = 1.2 + arc_rng.uniform(-0.2,0.2)
    start = (math.cos(angle)*r, math.sin(angle)*r, arc_rng.uniform(-0.2,0.2))
    end   = (arc_rng.uniform(-0.08,0.08), arc_rng.uniform(-0.08,0.08), 0)
    arc = make_lightning(start, end, segments=10, disp=0.15, thickness=0.008, rng=arc_rng)
    if arc:
        arc.data.materials.append(gradient_mat(
            f'MicroArc{k}', (1.0,1.0,1.0), (0.1,0.8,1.0), 10.0, r+0.3
        ))
        ARCS.append(arc)

# Volumetric atmosphere cube
bpy.ops.mesh.primitive_cube_add(size=6, location=(0,0,0))
vol = bpy.context.active_object; vol.name='BlueVol'
mv = bpy.data.materials.new('BlueVol')
mv.use_nodes = True; mv.node_tree.nodes.clear()
vp = mv.node_tree.nodes.new('ShaderNodeVolumePrincipled')
vp.inputs['Color'].default_value            = (0.04,0.28,1.0,1.0)
vp.inputs['Density'].default_value          = 0.07
vp.inputs['Emission Color'].default_value   = (0.01,0.12,0.75,1.0)
vp.inputs['Emission Strength'].default_value = 0.8
vo = mv.node_tree.nodes.new('ShaderNodeOutputMaterial')
mv.node_tree.links.new(vp.outputs['Volume'], vo.inputs['Volume'])
vol.data.materials.append(mv)

# ── Animation ─────────────────────────────────────────────────────────────────

flicker_rng = random.Random(99)
for frame in range(1, 91):
    # Core pulse — breathes in and out
    pulse = 1.0 + 0.09 * math.sin(frame * 0.18)
    core.scale = (pulse, pulse, pulse)
    core.keyframe_insert('scale', frame=frame)

    # Light flicker (electric crackle feel)
    light.data.energy = 9000 + 2500 * math.sin(frame*0.31 + 0.7) + flicker_rng.uniform(-800,800)
    light.data.keyframe_insert('energy', frame=frame)

    # Arc lightning jitter every 3 frames
    if frame % 3 == 1:
        jitter_rng = random.Random(frame * 137)
        for arc in ARCS:
            for spline in arc.data.splines:
                pts = spline.points
                for i in range(1, len(pts)-1):
                    pts[i].co.x += jitter_rng.gauss(0, 0.06)
                    pts[i].co.y += jitter_rng.gauss(0, 0.06)
                    pts[i].keyframe_insert('co', frame=frame)

# ── Compositor — bloom glow ───────────────────────────────────────────────────

scene.use_nodes = True
scene.node_tree.nodes.clear()
nodes,links = scene.node_tree.nodes, scene.node_tree.links
rl    = nodes.new('CompositorNodeRLayers')
glare = nodes.new('CompositorNodeGlare')
glare.glare_type='FOG_GLOW'; glare.quality='HIGH'
glare.threshold=0.4; glare.size=8; glare.mix=0.60
comp = nodes.new('CompositorNodeComposite')
links.new(rl.outputs['Image'], glare.inputs['Image'])
links.new(glare.outputs['Image'], comp.inputs['Image'])

# ── Render ────────────────────────────────────────────────────────────────────

print(f'\n[Blue Effect] Rendering 90 frames → {out_dir}')
print('After render, encode:')
print(f'  ffmpeg -r 30 -i "{out_dir}/frame_%04d.png" -c:v libvpx-vp9 -crf 28 -b:v 0 -pix_fmt yuva420p public/videos/effects/blue_effect.webm')
bpy.ops.render.render(animation=True)
print('[Blue Effect] Done.')
