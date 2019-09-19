function setup() {
  //size
  createCanvas(600, 500);
}
//speed
var ballX = 30;
var ballSpeed = 7;

var ballX2 = 370;
var ballSpeed2 = 4;

function draw() {
  
  //color
  background(100,50,200);
  
  //move up&down
  //color
  //size
  fill(255);
  //square
  rect(100,ballX , 100,100);
  
  fill(0);
  //ellipse
  ellipse(400, ballX2, 100,80);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;
//speed fast
  
  if (ballX >= 500) {
    ballSpeed = -7;
  }
//speed slow
  if (ballX2 >= 500) {
    ballSpeed2 = -4;
  }

  
  if (ballX <= 0) {
    ballSpeed = 7;
  }
    

  if (ballX2 <= 0) {
    ballSpeed2 = 4;
  }

}
