function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  background(255);
  
  //red square
  fill(255,0,0);
  rect(0,0,85,85);
  
  //blue rect
  fill(0,0,255);
  rect(100,100,300,110);
  
  //yellow square
  fill(255,255,0);
  rect(300,300,120,120);
  
  //line left
  fill(0)
  rect(0,85,400,15);
  
  //line up
  rect(85,0,15,400);
  
  //line middle
  rect(85,210,315,18);
  
  //line down
  rect(300,282,120,18);
  
  //lline right
  rect(282,210,18,190);
  
