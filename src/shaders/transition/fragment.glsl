varying vec2 vUv;
uniform sampler2D uTexture;
uniform sampler2D uTexture2;
uniform float uProgress;

void main(){
  vec4 textureColor = texture2D(uTexture, vUv);
  vec4 textureColor2 = texture2D(uTexture2, vUv);

  vec4 color = mix(textureColor,textureColor2,uProgress);

  gl_FragColor = color;
}