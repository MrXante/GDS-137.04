var canvas;
var context;
var player;
var mainTimer = setInterval(animate, 1000/60);

canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

player = new player();

//-----player speed on x and y axis-------
player.vx = 2;
player.vy = 0;
//----------------------------------------

timer = setInterval(animate, 1000/60);

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.move();
    //----loop screen-----------------------------
    if (player.x > canvas.width + player.width/2)
        {
        player.x = -player.width/2;
        }
    //--------------------------------------------

    player.draw();
}
