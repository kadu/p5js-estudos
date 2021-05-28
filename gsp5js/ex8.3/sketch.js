var radius = 40;
var x = -radius;
var speed = 1.5;

function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  x += speed;
  if(x > width + radius) {
    x = -radius;
  }
  arc(x, 60, radius, radius, 0.52, 5.76)
}
