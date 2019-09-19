function setup() {
  //size
  createCanvas(600, 500);
}

var ballX = 30;
var ballSpeed = 4;

var ballX2 = 370;
var ballSpeed2 = 3;

function draw() {
  
  //color
  background(100,50,200);
  
  //move up&down
  //color
  //size
  fill(255);
  ellipse(100,ballX , 100);
  
  fill(0);
  ellipse(300, ballX2, 50);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;

  if (ballX >= 500) {
    ballSpeed = -3;
  }

  if (ballX2 >= 500) {
    ballSpeed2 = -5;
  }

  if (ballX <= 0) {
    ballSpeed = 3;
  }

  if (ballX2 <= 0) {
    ballSpeed2 = 5;
  }

}
