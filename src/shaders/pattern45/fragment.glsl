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
  float radius = 0.3;
  float frequentie = 100.0;
  float amplitude = 0.02;

  float angle = atan(vUv.x -0.5,vUv.y -0.5);
  angle /= PI *2.0;
  angle += 0.5;

  vec2 waveUv = vec2(
    vUv.x + sin(angle *frequentie) *amplitude,
    vUv.y + cos(angle *frequentie)*amplitude
  );

  float strength = distance(waveUv,vec2(0.5));
  strength -=radius;
  strength = abs(strength);
  strength = 1.0 - step(0.015,strength);

  gl_FragColor = vec4(vec3(strength),1.0);
}