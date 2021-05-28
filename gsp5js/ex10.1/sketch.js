function JitterBug(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5;

  this.move = function () {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function () {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}


var jit;
var bug;


function setup() {
  createCanvas(480, 120);
  background(204);
  bug = new JitterBug(width*0.33, height/2, 50);
  jit = new JitterBug(width*0.66, height/2, 10);
}

function draw() {
  bug.move();
  bug.display();
  jit.move();
  jit.display();
}
