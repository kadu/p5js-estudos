var sine;
var freq = 400;

function setup() {
  createCanvas(440, 440);
  sine = new p5.SinOsc();
  sine.start();
}

function draw() {
  background(0);
  var hertz = map(mouseX, 0, width, 20.0, 440.0);
  sine.freq(hertz);
  stroke(204);
  for (let x = 0; x < width; x++) {
    var angle = map(x, 0, width, 0, TWO_PI * hertz);
    var sinValue = sin(angle) * 120;
    line(x, 0, x, height/2 + sinValue);
  }
}
