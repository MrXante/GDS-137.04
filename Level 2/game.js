var canvas;
var context;
var player1;

canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

player1 = new GameObject();

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    player1.drawRect();
}

var mainTimer = setInterval(animate, 1000 / 60);