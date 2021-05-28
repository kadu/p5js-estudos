var bot1;
var bot2;
var bot3;
var landscape;

var easing = 0.05;
var offset = 0;


function preload() {
  bot1 = loadImage("robot1.svg");
  bot2 = loadImage("robot2.svg");
  bot3 = loadImage("robot3.svg");
  landscape = loadImage("alpine.jpg");

}

function setup() {
  createCanvas(720, 480);
}

function draw() {
  background(landscape);
  var targetOffset = map(mouseY, 0, height, -40, 40);
  offset += (targetOffset - offset) * easing;

  image(bot1, 85 + offset, 65);

  var smallerOffset = offset * 0.7;
  image(bot2, 510 + smallerOffset, 140, 78, 248);

  smallerOffset *= -0.5;
  image(bot3, 410 + smallerOffset, 225, 39, 124);
}
