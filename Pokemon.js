var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);
document.onkeydown = function(key) {
  move(key.keyCode);
}

var ballReady = false;
var ball = new Image();
ball.onLoad = function() {
ballReady = true;
}
var ballObject = {}
ball.src = "http://hbttoysandgames.com/wp-content/uploads/2015/11/Pokemon-Ball-Poke-ball-Clip-Carry-Poke-3H-0.jpg"

ballObject.x = 70;
ballObject.y = 70;

var upKey = 38;
var downKey = 40;
var leftKey = 37;
var rightKey = 39;
var move = function(key) {
  if (key == upKey) {
    ballObject.y -= 50;
    console.log(ballObject.y);
  }
  // MORE DIRECTIONS!!!
}

var render = function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(ball, ballObject.x, ballObject.y);
}

var main = function() {

  render();
  window.requestAnimationFrame(main)
}

main();
