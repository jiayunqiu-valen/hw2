var ballX2 = 370;
var ballSpeed2 = 3;

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
