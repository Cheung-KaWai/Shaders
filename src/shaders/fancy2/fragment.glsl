precision mediump float;

// uniform vec2 u_resolution;
// uniform float u_time;

#define PI 3.1415926535897932384626433832795

#define cx_mul(a, b) vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x)
#define cx_div(a, b) vec2(((a.x*b.x + a.y*b.y)/(b.x*b.x + b.y*b.y)),((a.y*b.x - a.x*b.y)/(b.x*b.x + b.y*b.y)))
#define cx_sin(a) vec2(sin(a.x) * cosh(a.y), cos(a.x) * sinh(a.y))
#define cx_cos(a) vec2(cos(a.x) * cosh(a.y), -sin(a.x) * sinh(a.y))

varying vec2 vUv;
uniform float uTime;

vec2 cx_tan(vec2 a) {return cx_div(cx_sin(a), cx_cos(a)); }
vec2 cx_log(vec2 a) {
    float rpart = sqrt((a.x*a.x)+(a.y*a.y));
    float ipart = atan(a.y,a.x);
    if (ipart > PI) ipart=ipart-(2.0*PI);
    return vec2(log(rpart),ipart);
}

vec2 as_polar(vec2 z) {
  return vec2(
    length(z),
    atan(z.y, z.x)
  );
}
vec2 cx_pow(vec2 v, float p) {
  vec2 z = as_polar(v);
  return pow(z.x, p) * vec2(cos(z.y * p), sin(z.y * p + uTime));
}

float im(vec2 z) {
  return ((atan(z.y, z.x) / PI) + 1.0) * 0.5;
}

vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos(2.*PI*(c*t+d));
}

// Define our points
vec2 a0 = vec2(0.32, -0.45);
vec2 a1 = vec2(-0.49, -0.32);
vec2 a2 = vec2(-0.31, 0.38);
vec2 a3 = vec2(-0.12, 0.04);

vec2 b0 = vec2(-0.71, 0.53);
vec2 b1 = vec2(0.01, 0.23);
vec2 b2 = vec2(-0.24, 0.31);
vec2 b3 = vec2(-0.01, -0.42);

void main() {
    // Set up our imaginary plane
    vec2 uv = vec2(vUv.x -0.5, vUv.y -0.5);
    vec2 z = uv * 2.;

    // Calculate the sum of our first polynomial
    vec2 polyA = a0
        + cx_mul(a1, z)
        + cx_mul(a2, cx_pow(z, 2.0))
        + cx_mul(a3, cx_pow(z, 3.0));

    // Calculate the sum of our second polynomial
    vec2 polyB = b0
        + cx_mul(b1, z)
        + cx_mul(b2, cx_pow(z, 2.))
        + cx_mul(b3, cx_pow(z, 3.));

    // Calculate the ratio of our complex polynomials
    vec2 result = cx_div(polyA, polyB);

    float imaginary = cx_log(result).y;
    float col = (imaginary / PI);

    gl_FragColor = vec4(pal(col, vec3(.52 + sin(uTime),.45,.61 ),vec3(.40,.42,.31),vec3(.26,.30,.35),vec3(.15,.4,.4)),1.0);
}