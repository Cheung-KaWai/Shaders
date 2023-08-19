varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main(){
  vUv=uv;
  // tranforma the normal from localspace to worldspace
  vNormal=(modelMatrix*vec4(normal,0.)).xyz;
  // worlspace position, 1.0 add the translation
  vPosition=(modelMatrix*vec4(position,1.)).xyz;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}