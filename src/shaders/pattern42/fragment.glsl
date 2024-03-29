#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

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
  float angle = atan(vUv.x -0.5,vUv.y -0.5);
  angle /= PI *2.0;
  float strength = angle;

  gl_FragColor = vec4(vec3(strength),1.0);
}