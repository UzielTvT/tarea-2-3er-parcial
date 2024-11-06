const g = 9.81;
var y = 12;
var t = 0;
let dt = 0.1;

while (y > 0) {
    y = y - 0.5 * g * t**2;
    t += dt;
    console.log("y(t=", t,") = ", y);
}
