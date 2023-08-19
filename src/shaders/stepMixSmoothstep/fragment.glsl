varying vec2 vUv;
uniform sampler2D uTexture;

float random(vec2 st)
{
  return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

void main(){
  vec3 color=vec3(0.);
  
  float line=smoothstep(0.,.005,abs(vUv.y-.5));
  float threeLines=smoothstep(0.,.005,mod(vUv.y,.34));
  float linearLine=smoothstep(0.,.005,abs(vUv.y-mix(.68,1.,vUv.x)));
  float mixLine=smoothstep(0.,.005,abs(vUv.y-mix(.34,.68,mix(0.,1.,vUv.x))));
  float smoothstepLine=smoothstep(0.,.005,abs(vUv.y-mix(0.,.34,smoothstep(0.,1.,vUv.x))));
  
  vec3 red=vec3(1.,0.,0.);
  vec3 blue=vec3(0.,0.,1.);
  vec3 white=vec3(1.,1.,1.);
  
  color=mix(red,blue,smoothstep(0.,1.,vUv.x));
  color=mix(white,color,threeLines);
  color=mix(white,color,linearLine);
  color=mix(white,color,mixLine);
  color=mix(white,color,smoothstepLine);
  
  // if(vUv.y>.68){
    //   color=mix(red,blue,vUv.x);
  // }else{
    //   color=mix(red,blue,smoothstep(0.,1.,vUv.x));
  // }
  
  // color=mix(white,color,line);
  // color=mix(white,color,linearLine);
  // color=mix(white,color,smoothstepLine);
  // color=vec3(threeLines);
  // color= mix(white,color,)
  
  vec4 diffuse=texture2D(uTexture,vUv);
  // diffuse=smoothstep(0.,1.,diffuse);
  
  gl_FragColor=vec4(diffuse);
}