function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(204);
  line(20,20,220,100);
  if(keyIsPressed) {
    line(200,20,20,100);
  }
}
