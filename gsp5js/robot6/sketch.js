var x = 180;
var y = 400;
var bodyHeight = 153;
var neckHeight = 56;
var radius = 45;
var angle = 0.0

function setup() {
  createCanvas(360, 480);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  x += random(-4,4);
  y += random(-1,1);

  neckHeight = 80 + sin(angle) *30;
  angle += 0.05;

  var ny = y - bodyHeight - neckHeight -radius;

  // pescoco
  stroke(102);
  line(x+2, y-bodyHeight, x+2, ny);
  line(x+12, y-bodyHeight, x+12, ny);
  line(x+22, y-bodyHeight, x+22, ny);

  // antena
  line(x+12, ny, x-18, ny-43);
  line(x+12, ny, x+42, ny-99);
  line(x+12, ny, x+78, ny+15);

  // corpo
  noStroke();
  fill(102);
  ellipse(x, y-33, 33, 33);
  fill(0);
  rect(x-45, y-bodyHeight, 90, bodyHeight-33);
  fill(102);
  rect(x-45, y-bodyHeight+17, 90, 6);

  // cabeca
  fill(0);
  ellipse(x+12, ny, radius, radius);
  fill(255);
  ellipse(x+24, ny - 6, 14, 14);
  fill(0);
  ellipse(x+24, ny-6, 3, 3);
}
