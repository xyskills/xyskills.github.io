"""
Hollow Purple — Union of Blue and Red, the strongest technique.
Blender 3.6+ / 4.x render script.

Visual reference: white-hot center where the two cursed techniques meet,
an overwhelming storm of thick purple/violet lightning bolts in every direction,
dense pink/purple atmospheric particles, and a deep violet glow field.

Run:
  blender --background --python blender/hollow_purple_effect.py

Output: render/hollow_purple/frame_####.png  (90 frames @ 30 fps = 3 sec loop)

Encode:
  ffmpeg -r 30 -i render/hollow_purple/frame_%04d.png \\
         -c:v libvpx-vp9 -crf 28 -b:v 0 -pix_fmt yuva420p \\
         public/videos/effects/hollow_purple_effect.webm
"""

import bpy, math, os, random

# ── Helpers ───────────────────────────────────────────────────────────────────

def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
    for c in list(bpy.data.collections):
        bpy.data.collections.remove(c)

def normalize3(v):
    l=math.sqrt(v[0]**2+v[1]**2+v[2]**2)
    return (v[0]/l,v[1]/l,v[2]/l) if l>1e-6 else (0,0,1)

def perp_vector(d):
    p=(0,-d[2],d[1]) if abs(d[0])<abs(d[1]) else (-d[2],0,d[0])
    return normalize3(p)

def lerp3(a,b,t): return (a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t)
def add3(a,b): return (a[0]+b[0],a[1]+b[1],a[2]+b[2])
def scale3(v,s): return (v[0]*s,v[1]*s,v[2]*s)

def make_bolt(start, end, segments=16, disp=0.55, thickness=0.035, rng=None):
    """
    Generate a thick, violently jagged lightning bolt from start to end.
    High displacement = chaotic purple lightning.
    """
    if rng is None: rng=random
    dx,dy,dz=end[0]-start[0],end[1]-start[1],end[2]-start[2]
    l=math.sqrt(dx*dx+dy*dy+dz*dz)
    if l<1e-4: return None
    d=normalize3((dx,dy,dz))
    p1=perp_vector(d)
    p2=normalize3((d[1]*p1[2]-d[2]*p1[1],d[2]*p1[0]-d[0]*p1[2],d[0]*p1[1]-d[1]*p1[0]))
    pts=[start]
    for i in range(1,segments):
        t=i/segments
        base=lerp3(start,end,t)
        fade=1.0-abs(t-0.5)*1.2
        d1=rng.gauss(0,disp*max(0,fade))
        d2=rng.gauss(0,disp*max(0,fade)*0.6)
        pts.append(add3(base,add3(scale3(p1,d1),scale3(p2,d2))))
    pts.append(end)
    cd=bpy.data.curves.new('BoltCurve','CURVE')
    cd.dimensions='3D'; cd.bevel_depth=thickness; cd.bevel_resolution=3
    sp=cd.splines.new('POLY'); sp.points.add(len(pts)-1)
    for i,p in enumerate(pts): sp.points[i].co=(*p,1.0)
    obj=bpy.data.objects.new('Bolt',cd)
    bpy.context.collection.objects.link(obj)
    return obj

def emission_mat(name,color,strength,blend='ADD'):
    mat=bpy.data.materials.new(name)
    mat.use_nodes=True; mat.node_tree.nodes.clear()
    nodes,links=mat.node_tree.nodes,mat.node_tree.links
    em=nodes.new('ShaderNodeEmission')
    em.inputs['Color'].default_value=(*color,1.0)
    em.inputs['Strength'].default_value=strength
    out=nodes.new('ShaderNodeOutputMaterial')
    links.new(em.outputs['Emission'],out.inputs['Surface'])
    mat.blend_method=blend; return mat

def gradient_mat(name,near_col,far_col,strength,max_dist):
    mat=bpy.data.materials.new(name)
    mat.use_nodes=True; mat.node_tree.nodes.clear()
    nodes,links=mat.node_tree.nodes,mat.node_tree.links
    geom=nodes.new('ShaderNodeNewGeometry')
    vlen=nodes.new('ShaderNodeVectorMath'); vlen.operation='LENGTH'
    div=nodes.new('ShaderNodeMath'); div.operation='DIVIDE'; div.inputs[1].default_value=max_dist
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
    mat.blend_method='ADD'; return mat

# ── Scene ─────────────────────────────────────────────────────────────────────

clear_scene()
scene=bpy.context.scene
scene.render.fps=30
scene.frame_start,scene.frame_end=1,90
scene.render.resolution_x=1920; scene.render.resolution_y=1080
scene.render.image_settings.file_format='PNG'
scene.render.image_settings.color_mode='RGBA'
scene.render.film_transparent=True

out_dir=os.path.join(os.path.dirname(bpy.data.filepath) or '/tmp','render','hollow_purple')
os.makedirs(out_dir,exist_ok=True)
scene.render.filepath=os.path.join(out_dir,'frame_####')

# Engine — Hollow Purple needs heavy bloom
if bpy.app.version>=(4,0,0):
    scene.render.engine='BLENDER_EEVEE_NEXT'
    scene.eevee.use_bloom=True
    scene.eevee.bloom_threshold=0.25   # catch even faint purple glow
    scene.eevee.bloom_radius=10.0      # wide bleed for the lightning atmosphere
    scene.eevee.bloom_intensity=2.5    # very heavy bloom
    scene.eevee.taa_render_samples=64
else:
    scene.render.engine='CYCLES'
    scene.cycles.samples=128
    scene.cycles.use_denoising=True

# World — near-black deep purple
world=bpy.data.worlds.new('W'); world.use_nodes=True; scene.world=world
world.node_tree.nodes['Background'].inputs['Color'].default_value=(0.02,0.0,0.05,1.0)
world.node_tree.nodes['Background'].inputs['Strength'].default_value=0.10

# Camera — wider ortho to show full lightning storm
bpy.ops.object.camera_add(location=(0,-10,0),rotation=(math.radians(90),0,0))
cam=bpy.context.active_object; cam.data.type='ORTHO'; cam.data.ortho_scale=8.0; scene.camera=cam

# ── Effect geometry ───────────────────────────────────────────────────────────

# BLINDING WHITE CENTER — where Blue and Red meet
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.18,location=(0,0,0),segments=32,ring_count=16)
core=bpy.context.active_object; core.name='PurpleCore'
core.data.materials.append(emission_mat('PurpleCore',(1.0,1.0,1.0),120.0))

# Inner glow — hot white/violet
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.40,location=(0,0,0),segments=24,ring_count=12)
g1=bpy.context.active_object; g1.name='PG1'
g1.data.materials.append(emission_mat('PG1',(0.85,0.60,1.0),22.0))

# Mid purple glow
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.90,location=(0,0,0),segments=20,ring_count=10)
g2=bpy.context.active_object; g2.name='PG2'
g2.data.materials.append(emission_mat('PG2',(0.55,0.10,0.90),8.0))

# Outer deep violet atmosphere
bpy.ops.mesh.primitive_uv_sphere_add(radius=2.20,location=(0,0,0),segments=16,ring_count=8)
g3=bpy.context.active_object; g3.name='PG3'
g3.data.materials.append(emission_mat('PG3',(0.18,0.0,0.35),2.5))

# Very large dark purple haze (fills wide ortho frame)
bpy.ops.mesh.primitive_uv_sphere_add(radius=5.0,location=(0,0,0),segments=12,ring_count=6)
g4=bpy.context.active_object; g4.name='PG4'
g4.data.materials.append(emission_mat('PG4',(0.05,0.0,0.12),0.8))

# Point light — white at core, insanely bright
bpy.ops.object.light_add(type='POINT',location=(0,0,0))
light=bpy.context.active_object; light.name='PurpleLight'
light.data.color=(1.0,1.0,1.0); light.data.energy=20000.0; light.data.shadow_soft_size=0.3

# Area light — purple, contributes to background glow
bpy.ops.object.light_add(type='AREA',location=(0,0,1))
alight=bpy.context.active_object; alight.name='PurpleArea'
alight.data.color=(0.7,0.2,1.0); alight.data.energy=5000.0; alight.data.size=4.0

# ── LIGHTNING BOLT SYSTEM ────────────────────────────────────────────────────
#
# 30 bolt variants total; each frame shows ~18 of them, creating a dynamic
# flickering storm. Bolts vary in thickness: main (thick), secondary (medium),
# micro (thin). All gradient white→purple.
#
bolt_rng=random.Random(314)
ALL_BOLTS=[]

# 14 THICK main bolts — the dominant visual element
for k in range(14):
    angle=bolt_rng.uniform(0, math.pi*2)
    length=bolt_rng.uniform(2.8, 4.5)
    z_spread=bolt_rng.uniform(-1.2,1.2)
    start=(bolt_rng.uniform(-0.1,0.1), bolt_rng.uniform(-0.1,0.1), bolt_rng.uniform(-0.05,0.05))
    end=(math.cos(angle)*length, math.sin(angle)*length, z_spread)
    bolt=make_bolt(start,end,segments=16,disp=0.65,thickness=0.038,rng=bolt_rng)
    if bolt:
        bolt.data.materials.append(gradient_mat(
            f'ThickBolt{k}',
            near_col=(1.0,1.0,1.0),    # blinding white at center
            far_col=(0.65,0.05,1.0),   # bright violet at tips
            strength=22.0, max_dist=length+0.6
        ))
        ALL_BOLTS.append(bolt)

# 10 MEDIUM bolts — fills the visual field
for k in range(10):
    angle=bolt_rng.uniform(0,math.pi*2)
    length=bolt_rng.uniform(1.8,3.5)
    z_spread=bolt_rng.uniform(-0.8,0.8)
    start=(bolt_rng.uniform(-0.15,0.15), bolt_rng.uniform(-0.15,0.15), 0)
    end=(math.cos(angle)*length, math.sin(angle)*length, z_spread)
    bolt=make_bolt(start,end,segments=12,disp=0.45,thickness=0.022,rng=bolt_rng)
    if bolt:
        bolt.data.materials.append(gradient_mat(
            f'MedBolt{k}',
            near_col=(1.0,0.90,1.0), far_col=(0.50,0.0,0.85),
            strength=16.0, max_dist=length+0.5
        ))
        ALL_BOLTS.append(bolt)

# 6 MICRO sparks — thin, fast, random
for k in range(6):
    angle=bolt_rng.uniform(0,math.pi*2)
    length=bolt_rng.uniform(0.8,2.0)
    z_spread=bolt_rng.uniform(-0.5,0.5)
    start=(bolt_rng.uniform(-0.3,0.3), bolt_rng.uniform(-0.3,0.3), bolt_rng.uniform(-0.2,0.2))
    end=(math.cos(angle)*length, math.sin(angle)*length, z_spread)
    bolt=make_bolt(start,end,segments=8,disp=0.30,thickness=0.010,rng=bolt_rng)
    if bolt:
        bolt.data.materials.append(gradient_mat(
            f'MicroBolt{k}',
            near_col=(1.0,1.0,1.0), far_col=(0.8,0.3,1.0),
            strength=12.0, max_dist=length+0.3
        ))
        ALL_BOLTS.append(bolt)

NUM_BOLTS=len(ALL_BOLTS)

# ── ATMOSPHERIC PARTICLES ────────────────────────────────────────────────────
# Small glowing orbs scattered throughout the purple atmosphere.
# These represent the "cursed energy particles" visible in the reference images.

PARTICLE_OBJS=[]
particle_rng=random.Random(500)

# Create a reference tiny sphere (instances will orbit around it)
bpy.ops.mesh.primitive_uv_sphere_add(radius=0.03,location=(0,0,-20),segments=8,ring_count=4)
particle_template=bpy.context.active_object
particle_template.name='ParticleTemplate'
particle_template.data.materials.append(emission_mat('PtMat',(0.8,0.2,1.0),15.0))

# Scatter 60 particle orbs in the scene
for k in range(60):
    angle=particle_rng.uniform(0,math.pi*2)
    r=particle_rng.uniform(0.5,3.5)
    z=particle_rng.uniform(-2.0,2.0)
    size=particle_rng.uniform(0.015,0.055)
    bpy.ops.object.duplicate(linked=False)
    p=bpy.context.active_object
    p.name=f'Particle{k}'
    p.location=(math.cos(angle)*r, math.sin(angle)*r, z)
    p.scale=(size,size,size)
    PARTICLE_OBJS.append((p, angle, r, z, particle_rng.uniform(0.3,1.2)))

# Volumetric atmosphere — very dense purple
bpy.ops.mesh.primitive_cube_add(size=12,location=(0,0,0))
vol=bpy.context.active_object; vol.name='PurpleVol'
mv=bpy.data.materials.new('PurpleVol'); mv.use_nodes=True; mv.node_tree.nodes.clear()
vp=mv.node_tree.nodes.new('ShaderNodeVolumePrincipled')
vp.inputs['Color'].default_value=(0.45,0.0,0.80,1.0)
vp.inputs['Density'].default_value=0.18
vp.inputs['Emission Color'].default_value=(0.30,0.0,0.60,1.0)
vp.inputs['Emission Strength'].default_value=2.5
vo=mv.node_tree.nodes.new('ShaderNodeOutputMaterial')
mv.node_tree.links.new(vp.outputs['Volume'],vo.inputs['Volume'])
vol.data.materials.append(mv)

# ── Animation — lightning storm ───────────────────────────────────────────────
#
# Every frame: randomly select ~18 of the 30 bolts to be visible.
# This creates the chaotic flickering lightning storm seen in the reference.
# Use a deterministic seed per frame for reproducibility.

flicker=random.Random(42)
for frame in range(1,91):
    # Core pulse — violent, faster than Blue/Red
    pulse=1.0+0.14*math.sin(frame*0.28+0.5)+0.06*math.sin(frame*0.6)
    core.scale=(pulse,pulse,pulse)
    core.keyframe_insert('scale',frame=frame)

    # White light — intense flickering
    light.data.energy=20000+8000*math.sin(frame*0.35)+flicker.uniform(-3000,3000)
    light.data.keyframe_insert('energy',frame=frame)

    # Lightning bolt visibility storm — 18 bolts visible each frame
    frame_rng=random.Random(frame*31337+7)
    num_active=min(18, NUM_BOLTS)
    active_set=set(frame_rng.sample(range(NUM_BOLTS), num_active))
    for i,bolt in enumerate(ALL_BOLTS):
        bolt.hide_render=(i not in active_set)
        bolt.keyframe_insert('hide_render',frame=frame)

    # Bolt position jitter (active bolts twitch slightly)
    if frame%2==1:
        jr=random.Random(frame*991)
        for i,bolt in enumerate(ALL_BOLTS):
            if i in active_set:
                for spline in bolt.data.splines:
                    for mi,pt in enumerate(spline.points):
                        if 0<mi<len(spline.points)-1:
                            pt.co.x+=jr.gauss(0,0.08)
                            pt.co.y+=jr.gauss(0,0.08)
                            pt.keyframe_insert('co',frame=frame)

    # Particle orbits — slowly drift around the void
    for p,base_angle,r,z,speed in PARTICLE_OBJS:
        orbit_angle=base_angle+frame*speed*0.04
        p.location=(math.cos(orbit_angle)*r, math.sin(orbit_angle)*r, z)
        p.keyframe_insert('location',frame=frame)

# ── Compositor — HEAVY bloom for Hollow Purple ───────────────────────────────

scene.use_nodes=True; scene.node_tree.nodes.clear()
nodes,links=scene.node_tree.nodes,scene.node_tree.links
rl=nodes.new('CompositorNodeRLayers')

# Streak glare for lightning bolt glow
streaks=nodes.new('CompositorNodeGlare')
streaks.glare_type='STREAKS'; streaks.quality='HIGH'
streaks.threshold=0.6; streaks.streaks=4; streaks.angle_offset=math.radians(30); streaks.mix=0.25

# Fog glow for wide atmosphere bloom
fog=nodes.new('CompositorNodeGlare')
fog.glare_type='FOG_GLOW'; fog.quality='HIGH'
fog.threshold=0.2; fog.size=10; fog.mix=0.75

comp=nodes.new('CompositorNodeComposite')
links.new(rl.outputs['Image'],streaks.inputs['Image'])
links.new(streaks.outputs['Image'],fog.inputs['Image'])
links.new(fog.outputs['Image'],comp.inputs['Image'])

# ── Render ────────────────────────────────────────────────────────────────────

print(f'\n[Hollow Purple] Rendering 90 frames → {out_dir}')
print('This is the most complex effect — expect 10-30 min on CPU, 2-5 min on GPU.')
print('After render, encode:')
print(f'  ffmpeg -r 30 -i "{out_dir}/frame_%04d.png" -c:v libvpx-vp9 -crf 28 -b:v 0 -pix_fmt yuva420p public/videos/effects/hollow_purple_effect.webm')
bpy.ops.render.render(animation=True)
print('[Hollow Purple] Done.')
