var spot = {
  x: 100,
  y: 50
}

var col = 0;
var r = 255;
var g = 0;
var b = 255;

function setup() {
  createCanvas(620, 600);
}

function draw() {
  col = map(mouseX, 0, 500, 0, 255);
  background(col);

  r = map(mouseX,mouseY,500,0,255);

//rectLeft  
  fill(r);
  rect(520, 370, 80, 80);

//rectBig
  fill(r,0,51);
  rect(200, 150, 300, 300);

//rectRight  
  fill(r,0,0);
  rect(100, 370, 80, 80);
 
  fill(r);
  rect(20, 370, 80, 80); 
  
//rectTop
  fill(r);
  rect(315, 20, 80, 80);
  
//rectBottom
  fill(r,0,0);
  rect(315, 470, 80, 80);
  
  
  spot.x = random(0, 500);
  spot.y = random(500, 0);
  noStroke();
  fill(255,255,0);
  rect(spot.x,spot.y, 100, 100);
}