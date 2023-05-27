varying vec2 vUv;

void main(){
  float strengthX = mod(vUv.x*10.0,1.0);
  float strengthY = mod(vUv.y*10.0,1.0);
  strengthX = step(0.8,strengthX);
  strengthY = step(0.8,strengthY);

  float strength = strengthX +strengthY;

  gl_FragColor = vec4(vec3(strength),1.0);
}