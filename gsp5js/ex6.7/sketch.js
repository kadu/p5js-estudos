var angle = 0.0;
var angleDirection = 1;
var speed = 0.001;

function setup() {
  createCanvas(120, 120);
}

function draw() {
  background(220);
  translate(20,25);
  rotate(angle);
  strokeWeight(12);
  line(0,0,40,0);

  translate(40,0);
  rotate(angle * 2.0);
  strokeWeight(6);
  line(0,0,30,0);

  translate(30,0);
  rotate(angle * 2.5);
  strokeWeight(3);
  line(0,0,20,0);

  angle += speed * angleDirection;
  if((angle > QUARTER_PI) || (angle < 0)) {
    angleDirection *= -1;
  }
}
