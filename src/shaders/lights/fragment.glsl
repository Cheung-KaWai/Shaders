varying vec2 vUv;
varying vec3 vNormal;
uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform float uTime;
varying vec3 vPosition;

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
  vec3 color=gray;
  vec3 lighting=vec3(0.);
  vec3 normal=normalize(vNormal);
  
  //ambient
  vec3 ambient=vec3(.5);
  
  //Hemispher lightning 1 lightsource from above and bottom
  vec3 skyColor=vec3(0.,.3,.6);
  vec3 groundColor=vec3(.6,.3,.1);
  float hemiMix=remap(normal.y,-1.,1.,0.,1.);
  vec3 hemi=mix(groundColor,skyColor,hemiMix);
  
  // Diffuse lightning
  vec3 lightDir=normalize(vec3(1.,1.,1.));
  vec3 lightColor=vec3(1.,1.,.9);
  float dp=max(0.,dot(lightDir,normal));// => linear encoding space
  vec3 diffuse=dp*lightColor;
  
  //phong specular lightning
  vec3 viewDir=normalize(cameraPosition-vPosition);
  vec3 r=normalize(reflect(-lightDir,normal));
  float phongValue=max(0.,dot(viewDir,r));
  phongValue=pow(phongValue,4.);
  vec3 specular=vec3(phongValue);
  
  // Specular IBL(Image based lightning) aka env map
  // vec3 iblCoord = normalize(reflect(-viewDir,normal));
  // vec3 iblSample = textureCube(specMap,iblCoord).xyz;
  // specular += iblSample;
  
  // Fresnal
  float fresnel=1.-max(0.,dot(viewDir,normal));
  fresnel=pow(fresnel,2.);
  
  // cel shading / toon shading / cartoonish shading
  dp*=step(.5,dp);
  
  specular*=fresnel;
  lighting=ambient*0.+hemi*.5+diffuse;
  color=color*lighting+specular;
  
  color=linearToSRGB(color);
  
  gl_FragColor=vec4(color,1.);
}