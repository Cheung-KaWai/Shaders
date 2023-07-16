varying vec2 vUv;
uniform sampler2D uTextureNormal2;

void main(){
  vUv = uv;

  // vec3 custom_normal = texture2D(uTextureNormal2,uv).rgb;
  // custom_normal = custom_normal * 2.0 - 1.0;
  // csm_Normal = custom_normal;   
}