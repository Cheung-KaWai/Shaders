varying vec2 vUv;
varying vec3 vNormal;
uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform float uTime;
varying vec3 vPosition;
varying vec3 vColor;

vec3 gray=vec3(.5);
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

float toSRGB(float value){
  if(value<.0031308){
    return value*12.92;
  }
  return pow(value,.41666)*1.055-.055;
}

vec3 linearToSRGB(vec3 value){
  return vec3(toSRGB(value.x),toSRGB(value.y),toSRGB(value.z));
}

// better glsl version
vec3 toSRB(vec3 value){
  vec3 lt=vec3(lessThanEqual(value.rgb,vec3(.0031308)));
  vec3 v1=value*12.92;
  vec3 v2=pow(value.xyz,vec3(.41666))*1.055-vec3(.055);
  return mix(v2,v1,lt);
}

void main(){
  vec3 color=vColor;
  vec3 normal=normalize(cross(dFdx(vPosition.xyz),dFdy(vPosition.xyz)));
  
  vec3 lightDir=vec3(0.,1.,0.);
  vec3 lightColor=vec3(1.,1.,1.);
  float dp=max(0.,dot(lightDir,normal));
  
  vec3 lightDir2=vec3(1.,-1.,1.);
  float dp2=max(0.,dot(lightDir2,normal));
  
  vec3 diffuse=dp*lightColor;
  color=color*diffuse;
  // color=toSRB(color);
  
  gl_FragColor=vec4(color,1.);
}