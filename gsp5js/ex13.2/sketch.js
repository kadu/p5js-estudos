var mic;
var amp;

var scale = 1.0;

function setup() {
  getAudioContext().suspend();
  createCanvas(440, 440);
  background(0);

  mic = new p5.AudioIn();
  mic.start();
  amp = new p5.Amplitude();
  amp.setInput(mic);
}

function draw() {
  background(0);
  noStroke();
  fill(0,10);
  rect(0,0,width, length);
  scale = map(amp.getLevel(), 0 , 1.0, 10, width);
  fill(255);
  ellipse(width/2, height/2, scale, scale);
}

function mousePressed() {
  userStartAudio();
}