varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
uniform float uTime;
varying vec3 vColor;

float inverseLerp(float currentValue,float minValue,float maxValue){
  return(currentValue-minValue)/(maxValue-minValue);
}

float remap(float currentValue2,float inMin,float inMax,float outMin,float outMax){
  float t=inverseLerp(currentValue2,inMin,inMax);
  return mix(outMin,outMax,t);
}

mat3 rotateY(float radians){
  float s=sin(radians);
  float c=cos(radians);
  
  return mat3(
    c,0.,s,
    0.,1.,0.,
    -s,0.,c
  );
}

void main(){
  vUv=uv;
  
  vec3 locaSpacePosition=position;
  //offset is a addication
  // locaSpacePosition.y+=sin(uTime);
  
  float t=sin(locaSpacePosition.y*20.+uTime*5.);
  t=remap(t,-1.,1.,0.,.2);
  locaSpacePosition+=normal*t;
  
  //scaling is a multiplication
  // locaSpacePosition*=remap(sin(uTime),-1.,1.,.5,1.5);
  
  // locaSpacePosition=rotateY(uTime)*locaSpacePosition;
  
  // w component is the scaling, you set 1 if you want a position coordinate and 0 if you want to transform a directional vector
  gl_Position=projectionMatrix*modelViewMatrix*vec4(locaSpacePosition,1.);
  
  // tranforma the normal from localspace to worldspace
  vNormal=(modelMatrix*vec4(normal,0.)).xyz;
  // worlspace position, 1.0 add the translation
  vPosition=(modelMatrix*vec4(position,1.)).xyz;
  vColor=mix(vec3(0.,0.,.5),vec3(.1,.5,.8),smoothstep(0.,.2,t));
  // vColor=vec4(mix(red,blue,t),t);
}