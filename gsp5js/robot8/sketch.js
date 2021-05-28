var img1;
var img2;
var bot1;
var bot2;

function preload() {
  img1 = loadImage("robot1.svg");
  img2 = loadImage("robot2.svg");
}

function setup() {
  createCanvas(720, 480);
  bot1 = new Robot(img1, 90,80);
  bot2 = new Robot(img2, 440,30);
}

function draw() {
  background(220);

  bot1.update();
  bot1.display();

  bot2.update();
  bot2.display();
}

function Robot(img, tempX, tempY) {
  this.xpos = tempX;
  this.ypos = tempY;
  this.angle = random(0, TWO_PI);
  this.botImage = img;
  this.yoffset = 0.0;

  this.update = function () {
    this.angle += 0.05;
    this.yoffset = sin(this.angle) * 20;
  }

  this.display = function () {
    image(this.botImage, this.xpos, this.ypos,this.ypos+this.yoffset);
  }
}
