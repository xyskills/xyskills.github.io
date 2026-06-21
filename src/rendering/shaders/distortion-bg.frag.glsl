uniform sampler2D uVideoTexture;
uniform float uTime;
uniform float uDarkness;
uniform vec2 uDistortionCenters[3];
uniform float uDistortionStrengths[3];
uniform float uDistortionTypes[3]; // 1.0=push(blue), -1.0=pull(red), 2.0=purple
uniform int uActiveDistortions;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  for (int i = 0; i < 3; i++) {
    if (i >= uActiveDistortions) break;

    vec2 center = uDistortionCenters[i];
    float strength = uDistortionStrengths[i];
    float dtype = uDistortionTypes[i];

    vec2 toCenter = center - uv;
    float dist = length(toCenter);
    float radius = 0.45;

    if (dist < radius && dist > 0.001) {
      float normalizedDist = dist / radius;
      float falloff = 1.0 - normalizedDist;
      falloff = falloff * falloff * falloff;
      vec2 dir = normalize(toCenter);

      if (abs(dtype - 1.0) < 0.5) {
        // BLUE = PUSH - gravity pulling space inward, void in center
        float pushStrength = falloff * strength * 0.25;
        uv -= dir * pushStrength;
        // Concentric ripple rings
        float ring = sin(dist * 40.0 - uTime * 6.0) * 0.5 + 0.5;
        float ring2 = sin(dist * 25.0 - uTime * 4.0) * 0.5 + 0.5;
        uv -= dir * (ring * 0.03 + ring2 * 0.015) * falloff * strength;
        // Slight spiral
        float angle = falloff * strength * 0.25;
        float s = sin(angle);
        float c = cos(angle);
        vec2 off = uv - center;
        uv = center + vec2(c * off.x - s * off.y, s * off.x + c * off.y);
      } else if (abs(dtype + 1.0) < 0.5) {
        // RED = PULL - everything sucked toward center then explodes
        float pullStrength = falloff * strength * 0.2;
        uv += dir * pullStrength;
        // Violent swirl
        float angle = falloff * strength * 0.8 * sin(uTime * 4.0);
        float s = sin(angle);
        float c = cos(angle);
        vec2 off = uv - center;
        uv = center + vec2(c * off.x - s * off.y, s * off.x + c * off.y);
        // Shockwave rings
        float wave = sin(dist * 35.0 + uTime * 8.0) * 0.5 + 0.5;
        uv += dir * wave * falloff * strength * 0.025;
      } else if (abs(dtype - 2.0) < 0.5) {
        // PURPLE = room bending - concentric distortion rings, no spin
        float bendStrength = falloff * strength * 0.3;
        uv += dir * bendStrength;
        // Multiple concentric distortion rings
        float ring1 = sin(dist * 20.0 - uTime * 3.0) * 0.5 + 0.5;
        float ring2 = sin(dist * 35.0 - uTime * 5.0) * 0.5 + 0.5;
        float ring3 = sin(dist * 50.0 - uTime * 7.0) * 0.5 + 0.5;
        float rings = ring1 * 0.5 + ring2 * 0.3 + ring3 * 0.2;
        uv += dir * rings * falloff * strength * 0.06;
        // Chromatic-like spread
        float spread = falloff * strength * 0.1;
        uv += vec2(sin(uTime * 2.0 + dist * 15.0), cos(uTime * 2.5 + dist * 15.0)) * spread * 0.04;
      }
    }
  }

  // Mirror X for selfie view (VideoTexture handles Y correctly already)
  vec2 sampleUv = clamp(vec2(1.0 - uv.x, uv.y), 0.0, 1.0);
  vec4 color = texture2D(uVideoTexture, sampleUv);

  // Dark cinematic look — only when purple is active (uDarkness smoothly transitions)
  color.rgb *= uDarkness;

  // Color tinting + dramatic vignette near distortion
  for (int i = 0; i < 3; i++) {
    if (i >= uActiveDistortions) break;
    vec2 center = uDistortionCenters[i];
    float dist = length(center - vUv);
    float dtype = uDistortionTypes[i];
    float strength = uDistortionStrengths[i];
    float falloff = max(0.0, 1.0 - dist / 0.3);
    float tint = falloff * strength;

    if (abs(dtype - 1.0) < 0.5) {
      // Blue: cold, dark surrounding with blue rim light
      color.rgb *= 1.0 - tint * 0.4;
      color.rgb += vec3(-0.06, 0.04, 0.25) * tint;
      float vignette = max(0.0, 1.0 - dist / 0.2) * strength;
      color.rgb *= 1.0 - vignette * 0.5;
    } else if (abs(dtype + 1.0) < 0.5) {
      // Red: hot, aggressive red/black
      color.rgb *= 1.0 - tint * 0.4;
      color.rgb += vec3(0.3, -0.06, -0.06) * tint;
      float vignette = max(0.0, 1.0 - dist / 0.2) * strength;
      color.rgb *= 1.0 - vignette * 0.35;
      color.r += vignette * 0.12;
    } else if (abs(dtype - 2.0) < 0.5) {
      // Purple: deep purple darkening, white-hot center
      float purpleTint = tint * 1.5;
      color.rgb *= 1.0 - purpleTint * 0.5;
      color.rgb += vec3(0.15, -0.08, 0.3) * purpleTint;
      float hotspot = max(0.0, 1.0 - dist / 0.08) * strength;
      color.rgb += vec3(0.4, 0.25, 0.5) * hotspot;
      float vignette = max(0.0, 1.0 - dist / 0.35) * strength;
      color.rgb *= 1.0 - vignette * 0.6;
    }
  }

  gl_FragColor = color;
}
