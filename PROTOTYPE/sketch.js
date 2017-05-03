var col = 0;
var r =0;
var g = 51;
var b = 255;

function setup() {
  createCanvas(600,600);
}

function draw() {
  //forbackground
  col = map(mouseX, 0, 500, 0, 255);
  background(col);
  
  r = map(mouseX,mouseY,300, 0, 255);
  
  //rect-horizontal
  rect (50, 400, 50, 50);  
  rect (100, 400, 50, 50);
  rect (300, 400, 50, 50);
  rect (400, 400, 50, 50);
  rect (500, 400, 50, 50);
  
  //rect-vertical
  rect (300, 300, 50, 50);
  rect (300, 500, 50, 50);
}