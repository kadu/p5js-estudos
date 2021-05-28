var startX = 0;
var stopX  = 240;
var startY = 40;
var stopY  = 40;
var x      = startX;
var y      = startY;
var step   = 0.015;
var pct    = 0.0;



function setup() {
  createCanvas(240, 120);
}

function draw() {
  background(0);
  if(pct < 1.0) {
    x = startX + ((stopX-startX) * pct);
    y = startY + ((stopY-startY) * pct);
    pct += step;
  }
  ellipse(x, y, 20, 20);
}
