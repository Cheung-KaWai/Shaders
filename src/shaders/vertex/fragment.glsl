varying vec2 vUv;
varying vec3 vNormal;
uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform float uTime;
varying vec3 vPosition;
varying vec4 vColor;

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
  vec3 color=vColor.xyz;
  
  vec3 red=vec3(1.,0.,0.);
  vec3 blue=vec3(0.,0.,1.);
  vec3 yellow=vec3(1.,1.,0.);
  vec3 white=vec3(1.);
  
  float value1=vColor.w;
  float line=smoothstep(.003,.004,abs(vPosition.y-mix(-.5,0.,value1)));
  color=mix(yellow,color,line);
  
  if(vPosition.y>0.){
    float t=remap(vPosition.x,-.5,.5,0.,1.);
    t=pow(t,2.);
    color=mix(red,blue,t);
    float value2=t;
    float line2=smoothstep(.003,.004,abs(vPosition.y-mix(0.,.5,value2)));
    color=mix(yellow,color,line2);
  }
  
  float middleLine=smoothstep(.004,.005,abs(vPosition.y));
  color=mix(white,color,middleLine);
  
  gl_FragColor=vec4(color,1.);
}