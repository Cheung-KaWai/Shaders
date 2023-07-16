varying vec2 vUv;
uniform sampler2D uTextureColor;
uniform sampler2D uTextureColor2;
uniform sampler2D uTextureRoughness2;
uniform float uProgress;

void main(){
  vec4 textureColor = texture2D(uTextureColor, vUv);
  vec4 textureColor2 = texture2D(uTextureColor2, vUv);

  // vec4 custom_roughness = texture2D(uTextureRoughness2,vUv);
  // csm_Roughness = custom_roughness.g;

  vec4 color = mix(textureColor,textureColor2,uProgress);
  csm_DiffuseColor = color;



  // gl_FragColor = color;
}