varying vec2 vUv;
uniform vec2 uResolution;
// uniform sampler2D uTexture;

vec3 gray=vec3(.7);
vec3 black=vec3(0.);
vec3 blue=vec3(0.,0.,1.);
vec3 yellow=vec3(1.,1.,0.);

void main(){
  vec3 color=gray;
  vec2 center=vUv-.5;
  vec2 cell=fract(center*uResolution/.5);
  cell=abs(cell-.5);
  float distToCell=1.-2.*max(cell.x,cell.y);
  float grid=smoothstep(0.,.05,distToCell);
  
  float xAxis=smoothstep(0.,.002,abs(vUv.y-.5));
  float yAxis=smoothstep(0.,.002,abs(vUv.x-.5));
  
  vec2 pos=center*uResolution/.5;
  float value1=pos.x;
  float value2=floor(pos.x);
  float functionLine1=smoothstep(0.,.075,abs(pos.y-value1));
  float functionLine2=smoothstep(0.,.075,abs(pos.y-value2));
  
  color=mix(black,color,grid);
  color=mix(blue,color,xAxis);
  color=mix(blue,color,yAxis);
  color=mix(yellow,color,functionLine1);
  color=mix(yellow,color,functionLine2);
  
  gl_FragColor=vec4(color,1.);
}