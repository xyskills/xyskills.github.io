"""
Reversal: Red — Cursed Technique Repulsive Force
Blender 3.6+ / 4.x render script.

Run:
  blender --background --python blender/red_effect.py

Output: render/red_effect/frame_####.png  (90 frames @ 30 fps = 3 sec loop)

Encode:
  ffmpeg -r 30 -i render/red_effect/frame_%04d.png \\
         -c:v libvpx-vp9 -crf 28 -b:v 0 -pix_fmt yuva420p \\
         public/videos/effects/red_effect.webm
"""

import bpy, math, os, random

# ── Helpers (same pattern as blue_effect.py) ─────────────────────────────────

def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
    for c in list(bpy.data.collections):
        bpy.data.collections.remove(c)

def normalize3(v):
    l = math.sqrt(v[0]**2+v[1]**2+v[2]**2)
    return (v[0]/l,v[1]/l,v[2]/l) if l>1e-6 else (0,0,1)

def perp_vector(d):
    p = (0,-d[2],d[1]) if abs(d[0])<abs(d[1]) else (-d[2],0,d[0])
    return normalize3(p)

def lerp3(a,b,t): return (a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t, a[2]+(b[2]-a[2])*t)
def add3(a,b):    return (a[0]+b[0], a[1]+b[1], a[2]+b[2])
def scale3(v,s):  return (v[0]*s, v[1]*s, v[2]*s)

def make_slash(start, end, segments=8, disp=0.08, thickness=0.012, rng=None):
    """Create a near-straight energy slash (low displacement = sharp, aggressive)."""
    if rng is None: rng=random
    dx,dy,dz = end[0]-start[0],end[1]-start[1],end[2]-start[2]
    l=math.sqrt(dx*dx+dy*dy+dz*dz)
    if l<1e-4: return None
    d=normalize3((dx,dy,dz))
    p1=perp_vector(d)
    p2=normalize3((d[1]*p1[2]-d[2]*p1[1],d[2]*p1[0]-d[0]*p1[2],d[0]*p1[1]-d[1]*p1[0]))
    pts=[start]
    for i in range(1,segments):
        t=i/segments
        base=lerp3(start,end,t)
        d1=rng.gauss(0,disp); d2=rng.gauss(0,disp*0.3)
        pts.append(add3(base,add3(scale3(p1,d1),scale3(p2,d2))))
    pts.append(end)
    cd=bpy.data.curves.new('SlashCurve','CURVE')
    cd.dimensions='3D'; cd.bevel_depth=thickness; cd.bevel_resolution=2
    sp=cd.splines.new('POLY'); sp.points.add(len(pts)-1)
    for i,p in enumerate(pts): sp.points[i].co=(*p,1.0)
    obj=bpy.data.objects.new('Slash',cd)
    bpy.context.collection.objects.link(obj)
    return obj

def emission_mat(name, color, strength, blend='ADD'):
    mat=bpy.data.materials.new(name)
    mat.use_nodes=True; mat.node_tree.nodes.clear()
    nodes,links=mat.node_tree.nodes,mat.node_tree.links
    em=nodes.new('ShaderNodeEmission')
    em.inputs['Color'].default_value=(*color,1.0)
    em.inputs['Strength'].default_value=strength
    out=nodes.new('ShaderNodeOutputMaterial')
    links.new(em.outputs['Emission'],out.inputs['Surface'])
    mat.blend_method=blend
    return mat

def gradient_mat(name, near_col, far_col, strength, max_dist):
    mat=bpy.data.materials.new(name)
    mat.use_nodes=True; mat.node_tree.nodes.clear()
    nodes,links=mat.node_tree.nodes,mat.node_tree.links
    geom=nodes.new('ShaderNodeNewGeometry')
    vlen=nodes.new('ShaderNodeVectorMath'); vlen.operation='LENGTH'
    div=nodes.new('ShaderNodeMath'); div.operation='DIVIDE'
    div.inputs[1].default_value=max_dist
    ramp=nodes.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].position=0.0; ramp.color_ramp.elements[0].color=(*near_col,1.0)
    ramp.color_ramp.elements[1].position=1.0; ramp.color_ramp.elements[1].color=(*far_col,1.0)
    em=nodes.new('ShaderNodeEmission'); em.inputs['Strength'].default_value=strength
    out=nodes.new('ShaderNodeOutputMaterial')
    links.new(geom.outputs['Position'],vlen.inputs[0])
    links.new(vlen.outputs['Value'],div.inputs[0])
    links.new(div.outputs['Value'],ramp.inputs['Fac'])
    links.new(ramp.outputs['Color'],em.inputs['Color'])
    links.new(em.outputs['Emission'],out.inputs['Surface'])
    mat.blend_method='ADD'
    return mat

# ── Scene ─────────────────────────────────────────────────────────────────────

clear_scene()
scene=bpy.context.scene
scene.render.fps=30
scene.frame_start,scene.frame_end=1,90
scene.render.resolution_x=1920; scene.render.resolution_y=1080
scene.render.image_settings.file_format='PNG'
scene.render.image_settings.color_mode='RGBA'
scene.render.film_transparent=True

out_dir=os.path.join(os.path.dirname(bpy.data.filepath) or '/tmp','render','red_effect')
os.makedirs(out_dir,exist_ok=True)
scene.render.filepath=os.path.join(out_dir,'frame_####')

if bpy.app.version>=(4,0,0):
    scene.render.engine='BLENDER_EEVEE_NEXT'
    scene.eevee.use_bloom=True
    scene.eevee.bloom_threshold=0.3
    scene.eevee.bloom_radius=8.0
    scene.eevee.bloom_intensity=1.8
    scene.eevee.taa_render_samples=64
else:
    scene.render.engine='CYCLES'
    scene.cycles.samples=96
    scene.cycles.use_denoising=True

world=bpy.data.worlds.new('W')
world.use_nodes=True; scene.world=world
world.node_tree.nodes['Background'].inputs['Color'].default_value=(0.04,0.0,0.0,1.0)
world.node_tree.nodes['Background'].inputs['Strength'].default_value=0.12

bpy.ops.object.camera_add(location=(0,-8,0),rotation=(math.radians(90),0,0))
cam=bpy.context.active_object; cam.data.type='ORTHO'; cam.data.ortho_scale=4.0; scene.camera=cam

# ── Effect geometry ───────────────────────────────────────────────────────────

# Hot white-red core
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.22,location=(0,0,0),segments=32,ring_count=16)
core=bpy.context.active_object; core.name='RedCore'
core.data.materials.append(emission_mat('RedCore',(1.0,0.85,0.7),100.0))

# Inner red glow
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.45,location=(0,0,0),segments=24,ring_count=12)
g1=bpy.context.active_object; g1.name='RG1'
g1.data.materials.append(emission_mat('RG1',(1.0,0.08,0.02),16.0))

# Mid crimson glow
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.92,location=(0,0,0),segments=20,ring_count=10)
g2=bpy.context.active_object; g2.name='RG2'
g2.data.materials.append(emission_mat('RG2',(0.7,0.01,0.01),6.0))

# Outer dark-red atmosphere sphere
bpy.ops.mesh.primitive_uv_sphere_add(radius=1.70,location=(0,0,0),segments=16,ring_count=8)
g3=bpy.context.active_object; g3.name='RG3'
g3.data.materials.append(emission_mat('RG3',(0.25,0.0,0.0),2.0))

# Bright red point light
bpy.ops.object.light_add(type='POINT',location=(0,0,0))
light=bpy.context.active_object; light.name='RedLight'
light.data.color=(1.0,0.1,0.03); light.data.energy=12000.0

# 12 radial slash lines — the signature Red "slashes" seen in the reference
# These are nearly-straight lines radiating outward (low displacement)
slash_rng=random.Random(77)
SLASHES=[]
for k in range(12):
    angle=k*math.pi/6 + slash_rng.uniform(-0.08,0.08)
    length=1.6 + slash_rng.uniform(0, 0.5)
    # Start near core, slash outward
    start=(math.cos(angle)*0.22, math.sin(angle)*0.22, slash_rng.uniform(-0.05,0.05))
    end  =(math.cos(angle)*length, math.sin(angle)*length, slash_rng.uniform(-0.15,0.15))
    s=make_slash(start,end,segments=7,disp=0.05+slash_rng.uniform(0,0.08),
                 thickness=0.012+slash_rng.uniform(0,0.012),rng=slash_rng)
    if s:
        s.data.materials.append(gradient_mat(
            f'SlashMat{k}',
            near_col=(1.0,0.9,0.8),  # hot white at core
            far_col=(0.8,0.0,0.0),   # deep red at tips
            strength=20.0, max_dist=length+0.3
        ))
        SLASHES.append(s)

# 6 secondary thinner slashes between main ones
for k in range(6):
    angle=k*math.pi/3 + math.pi/6 + slash_rng.uniform(-0.1,0.1)
    length=1.0 + slash_rng.uniform(0,0.4)
    start=(math.cos(angle)*0.20, math.sin(angle)*0.20, 0)
    end  =(math.cos(angle)*length, math.sin(angle)*length, slash_rng.uniform(-0.1,0.1))
    s=make_slash(start,end,segments=5,disp=0.03,thickness=0.006,rng=slash_rng)
    if s:
        s.data.materials.append(gradient_mat(f'SlashSec{k}',(1.0,0.8,0.6),(0.6,0.0,0.0),12.0,length+0.2))
        SLASHES.append(s)

# Expanding shockwave rings (3 tori that scale out and fade)
for k in range(3):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=0.3+k*0.1, minor_radius=0.02, major_segments=48, minor_segments=8,
        location=(0,0,0), rotation=(math.radians(90),0,0)
    )
    ring=bpy.context.active_object; ring.name=f'Shockwave{k}'
    ring.data.materials.append(emission_mat(f'ShockMat{k}',(1.0,0.15,0.03),8.0))
    # Animate: expand from 0.5x to 2.5x scale over 45 frames (staggered)
    start_frame=1+k*15
    ring.scale=(0.5,0.5,0.5)
    ring.keyframe_insert('scale',frame=start_frame)
    ring.scale=(2.5,2.5,2.5)
    ring.keyframe_insert('scale',frame=start_frame+40)
    # Opacity via emission strength (handled by light energy proxy)

# Volumetric — deep crimson scatter
bpy.ops.mesh.primitive_cube_add(size=6,location=(0,0,0))
vol=bpy.context.active_object; vol.name='RedVol'
mv=bpy.data.materials.new('RedVol'); mv.use_nodes=True; mv.node_tree.nodes.clear()
vp=mv.node_tree.nodes.new('ShaderNodeVolumePrincipled')
vp.inputs['Color'].default_value=(1.0,0.06,0.01,1.0)
vp.inputs['Density'].default_value=0.10
vp.inputs['Emission Color'].default_value=(0.8,0.02,0.0,1.0)
vp.inputs['Emission Strength'].default_value=1.2
vo=mv.node_tree.nodes.new('ShaderNodeOutputMaterial')
mv.node_tree.links.new(vp.outputs['Volume'],vo.inputs['Volume'])
vol.data.materials.append(mv)

# ── Animation ─────────────────────────────────────────────────────────────────

flicker=random.Random(55)
for frame in range(1,91):
    # Core throbs aggressively
    pulse=1.0+0.12*math.sin(frame*0.22+0.3)+0.04*math.sin(frame*0.51)
    core.scale=(pulse,pulse,pulse)
    core.keyframe_insert('scale',frame=frame)

    # Light energy — violent flickering
    light.data.energy=12000+4000*math.sin(frame*0.4)+flicker.uniform(-1500,1500)
    light.data.keyframe_insert('energy',frame=frame)

    # Slashes jitter aggressively every 2 frames
    if frame%2==1:
        jr=random.Random(frame*53)
        for s in SLASHES[:12]:   # only main slashes animate
            for spline in s.data.splines:
                for i,pt in enumerate(spline.points):
                    if 0<i<len(spline.points)-1:
                        pt.co.x+=jr.gauss(0,0.04)
                        pt.co.z+=jr.gauss(0,0.04)
                        pt.keyframe_insert('co',frame=frame)

# ── Compositor ────────────────────────────────────────────────────────────────

scene.use_nodes=True; scene.node_tree.nodes.clear()
nodes,links=scene.node_tree.nodes,scene.node_tree.links
rl=nodes.new('CompositorNodeRLayers')
glare=nodes.new('CompositorNodeGlare')
glare.glare_type='FOG_GLOW'; glare.quality='HIGH'
glare.threshold=0.3; glare.size=9; glare.mix=0.65
comp=nodes.new('CompositorNodeComposite')
links.new(rl.outputs['Image'],glare.inputs['Image'])
links.new(glare.outputs['Image'],comp.inputs['Image'])

# ── Render ────────────────────────────────────────────────────────────────────

print(f'\n[Red Effect] Rendering 90 frames → {out_dir}')
print(f'  ffmpeg -r 30 -i "{out_dir}/frame_%04d.png" -c:v libvpx-vp9 -crf 28 -b:v 0 -pix_fmt yuva420p public/videos/effects/red_effect.webm')
bpy.ops.render.render(animation=True)
print('[Red Effect] Done.')
