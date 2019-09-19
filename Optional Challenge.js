function setup() {
  createCanvas(400, 400);
}

var ballX = 30;
var ballSpeed = 3;

var ballY = 10;
var ballSpeedY = 3;


var ballX2 = 370;
var ballSpeed2 = 5;

var ballY2 = 370;
var ballSpeedY2 = 5;

var ballX3 =200;
var ballSpeed3=7;

var ballY3 = 370;
var ballSpeedY3 = 5;

function draw() {
  background(220);

  fill(255, 0, 0);
  ellipse(ballX, ballY, 30);
  
  fill(0, 0, 255);
  ellipse(ballX2, ballY2, 30);
  
  fill(0,255,0);
  ellipse(ballX3,ballY3,30);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;
  ballX3=ballX3+ ballSpeed3
  
  ballY = ballY + ballSpeedY;
  ballY2 = ballY2 + ballSpeedY2;
  ballY3 = ballY3 + ballSpeedY3;
  
  

  if (ballX >= 400) {
    ballSpeed = -3;
  }

  if (ballX2 >= 400) {
    ballSpeed2 = -5;
  }
  
  if (ballX3 >= 400){
    ballSpeed3 =-7;
  }

  if (ballY <= 0) {
    ballSpeedY = 3;
  }

  if (ballY2 <= 0) {
    ballSpeedY2 = 5;
  }
  
  if (ballY3 <= 0) {
    ballSpeedY3 = 7;
  }
  
  
  if (ballY >= 400) {
    ballSpeedY = -3;
  }

  if (ballY2 >= 400) {
    ballSpeedY2 = -5;
  }
  
  if (ballY3 >= 400){
    ballSpeedY3 =-7;
  }

  if (ballX <= 0) {
    ballSpeed = 3;
  }

  if (ballX2 <= 0) {
    ballSpeed2 = 5;
  }
  
  if (ballX3 <= 0) {
    ballSpeed3 = 7;
  }

}
