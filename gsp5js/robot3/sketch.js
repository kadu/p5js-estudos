var x = 60;
var y = 440;
var radius = 45;
var bodyHeight = 160;
var neckHeight = 70;
var easing = 0.04;


function setup() {
  createCanvas(360, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  var targetX = mouseX;
  x += (targetX -x) * easing;

  if(mouseIsPressed) {
    neckHeight = 16;
    bodyHeight = 90;
  } else {
    neckHeight = 70;
    bodyHeight = 160;
  }

  var neckY = y - bodyHeight - neckHeight - radius;

  background(204);

  // neck
  stroke(102);
  line(x+12, y-bodyHeight, x+12, neckY);

  // antena
  line(x+12, neckY, x-18, neckY-43);
  line(x+12, neckY, x+42, neckY-99);
  line(x+12, neckY, x+78, neckY+15);

  // body
  noStroke();
  fill(102);
  ellipse(x, y-33, 33,33);
  fill(0);
  rect(x-45, y-bodyHeight, 90, bodyHeight-33);

  // cabeca
  fill(0);
  ellipse(x+12, neckY, radius, radius);
  fill(255);
  ellipse(x+24, neckY-6, 14,14);
  fill(0);
  ellipse(x+24, neckY-6, 3, 3);
}
