varying vec2 vUv;
uniform float uTime;
uniform float uStrength;
uniform vec2 uCenter;

void main() {
  vec2 dir = vUv - uCenter;
  float dist = length(dir);
  float distortion = uStrength / (dist + 0.1);
  vec2 offset = normalize(dir) * distortion * 0.01 * sin(uTime * 3.0 + dist * 10.0);
  gl_FragColor = vec4(offset.x, offset.y, 0.0, distortion * 0.3);
}
