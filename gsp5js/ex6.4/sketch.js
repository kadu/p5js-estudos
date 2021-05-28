function setup() {
  createCanvas(120, 120);

}

function draw() {
  background(204);
  rotate(mouseX/100);
  rect(-80, -10, 160, 20);
}
