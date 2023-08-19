varying vec2 vUv;
uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform float uTime;

vec3 gray=vec3(1.,1.,1.);
vec3 black=vec3(0.);
vec3 blue=vec3(0.,0.,1.);
vec3 yellow=vec3(1.,1.,0.);
vec3 white=vec3(1.,1.,1.);

float inverseLerp(float currentValue,float minValue,float maxValue){
  return(currentValue-minValue)/(maxValue-minValue);
}

float remap(float currentValue2,float inMin,float inMax,float outMin,float outMax){
  float t=inverseLerp(currentValue2,inMin,inMax);
  return mix(outMin,outMax,t);
}

void main(){
  vec3 color=gray;
  color=texture2D(uTexture,vUv).xyz;
  float lines=sin((vUv.y+uTime*.05)*300.);
  lines=remap(lines,-1.,1.,.9,1.);
  color=mix(gray,color,lines);
  
  gl_FragColor=vec4(color,1.);
}