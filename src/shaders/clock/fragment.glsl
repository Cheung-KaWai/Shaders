#define PI 3.1415926535897932384626433832795

varying vec2 vUv;
uniform float uTime;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

void main(){
  vec2 vUvRotate = rotate(vUv, uTime, vec2(0.5,0.5));
  float angle = atan(vUvRotate.x -0.5,vUvRotate.y -0.5);
  angle /= PI *2.0;
  angle += 0.25;
  float strength = angle;


  gl_FragColor = vec4(vec3(strength),1.0);
}