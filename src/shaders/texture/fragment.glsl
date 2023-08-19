varying vec2 vUv;
uniform vec2 uResolution;
uniform sampler2D uTexture;

vec3 gray=vec3(.7);
vec3 black=vec3(0.);

void main(){
  // Calculate the aspect ratio of the texture
  vec2 textureSize=vec2(texture2D(uTexture,vec2(.5,.5)).x,1.);
  float textureAspect=textureSize.x/textureSize.y;
  
  // Calculate the aspect ratio of the screen
  float screenAspect=uResolution.x/uResolution.y;
  
  // Calculate the offset and scale needed to maintain the aspect ratio
  vec2 offset=vec2(0.);
  vec2 scale=vec2(1.);
  
  if(textureAspect>screenAspect){
    // Texture is wider, adjust the horizontal scale
    scale.x=screenAspect/textureAspect;
    offset.x=(1.-scale.x)*.5;
  }else{
    // Texture is taller, adjust the vertical scale
    scale.y=textureAspect/screenAspect;
    offset.y=(1.-scale.y)*.5;
  }
  
  // Apply the aspect ratio correction to the texture coordinates
  vec2 correctedUV=vec2((vUv.x-offset.x)/scale.x,(vUv.y-offset.y)/scale.y);
  
  vec4 diffuse=texture2D(uTexture,vUv);
  vec3 color=diffuse.xyz;
  
  gl_FragColor=vec4(vec3(color.g),1.);
}