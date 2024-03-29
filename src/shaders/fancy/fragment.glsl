#define PI 3.141592653589793
#define cx_div(a, b) vec2(((a.x*b.x+a.y*b.y)/(b.x*b.x+b.y*b.y)),((a.y*b.x-a.x*b.y)/(b.x*b.x+b.y*b.y)))

varying vec2 vUv;
uniform float uTime;

vec2 as_polar(vec2 z) {
  return vec2(
    length(z),
    atan(z.y, z.x)
  );
}

vec2 cx_log(vec2 a) {
    vec2 polar = as_polar(a);
    float rpart = polar.x;
    float ipart = polar.y;
    if (ipart > PI) ipart=ipart-(2.0*PI);
    return vec2(log(rpart),ipart);
}

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
    return a + b*cos( 0.38*2.*PI*(c*t+d) );
}

void main() {
  vec2 z = vec2(vUv.x -0.5, vUv.y -0.5);
  
  float angle = sin(uTime/5.) * 2. * PI;
  float length = .2;
  
  // Spin our points in a circle of radius length
  float c = cos(angle);
  float s = sin(angle);
  vec2 p = vec2( s*length, c*length);
  vec2 q = vec2( s*-length, c*-length );
  
  // Divide z-p by z-q using complex division
  vec2 division = cx_div((z - p), (z - q));
  
  // Calculate the log of our division
  vec2 log_p_over_q = cx_log(division);

  // Extract the imaginary number
  float imaginary = log_p_over_q.y / PI;

  vec3 col = palette( imaginary, vec3(0.50,.52,0.53), vec3(.46,.32,.35), vec3(.82,.84,.65), vec3(0.53,0.23,0.22));

  gl_FragColor = vec4(col, 1.0);
}