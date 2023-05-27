#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

float plot(vec2 uv){
  return smoothstep(0.01,0.0, abs(uv.y-uv.x));
}

void main(){

  float y = vUv.x;

  vec3 color = vec3(plot(vUv));

  gl_FragColor = vec4(color,1);
}