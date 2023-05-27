#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

float plot(vec2 uv,float pct){
  return smoothstep(0.01,0.0, abs(vUv.y-pct));
}

void main(){

  float y = pow(vUv.x,5.0);

  vec3 color = vec3(plot(vUv,y));

  gl_FragColor = vec4(color,1);
}