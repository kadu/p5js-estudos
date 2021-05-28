var x = 60;
var y = 440;
var radius = 45;
var bodyHeight = 180;
var neckHeight = 40;
var easing = 0.04;

function setup() {
  createCanvas(360, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);

  var neckY = -1 * (bodyHeight + neckHeight + radius);

  translate(mouseX, y);

  if(mouseIsPressed) {
    scale(1.0);
  } else {
    scale(0.6);
  }

  // corpo
  noStroke();
  fill(102);
  ellipse(0, -33, 33, 33);
  fill(0);
  rect(-45, -bodyHeight, 90, bodyHeight-33);

  // pescoco
  stroke(102);
  line(12, -bodyHeight, 12, neckY);

  // cabelo
  push();
  translate(12, neckY);
  var angle = -PI/30.0;
  for (let i = 0; i < 30; i++) {
    line(80,0,0,0);
    rotate(angle);
  }
  pop();

  // cabeca
  noStroke();
  fill(0);
  ellipse(12, neckY, radius, radius);
  fill(255);
  ellipse(24, neckY-6, 14, 14);
  fill(0);
  ellipse(24, neckY-6, 3, 3);
}
