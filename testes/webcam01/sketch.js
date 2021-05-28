var mic;
var amp;
let micWarning = true;

var scale = 1.0;

function setup() {
  getAudioContext().suspend();
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(width, height);
  // video.hide();

  mic = new p5.AudioIn();
  mic.start();
  amp = new p5.Amplitude();
  amp.setInput(mic);
}

function draw() {
  background(255);

  let gridSize = 20;
  scale = map(amp.getLevel(), 0 , 1.0, 1,10);

  video.loadPixels();
  for (let y = 0; y < video.height; y+=gridSize) {
    for (let x = 0; x < video.width; x+=gridSize) {
      let index = (y * video.width + x) *4;
      let r = video.pixels[index];
      let dia = map(r, 0, 255, gridSize, 2);
      fill(video.pixels[index-4],video.pixels[index-3],video.pixels[index-1]);
      noStroke();
      circle(x, y, dia * scale);

    }
  }

  if(micWarning) {
    fill(0);
    textSize(64);
    text('click to mic', 30, 60);
  }
}

function mousePressed() {
  micWarning = false;
  userStartAudio();
}