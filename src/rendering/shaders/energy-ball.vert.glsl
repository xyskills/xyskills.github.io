varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
uniform float uTime;
uniform float uDisplacementScale;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;

  float displacement = (
    sin(position.x * 8.0  + uTime * 4.0) * 0.04
  + sin(position.y * 6.0  + uTime * 3.0) * 0.04
  + sin(position.z * 10.0 + uTime * 5.0) * 0.03
  + sin((position.x + position.y) * 12.0 + uTime * 6.0) * 0.02
  ) * uDisplacementScale;

  vec3 newPosition = position + normal * displacement;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
