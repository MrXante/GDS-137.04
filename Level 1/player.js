function player()
{
    //location of the player
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    //player dimensions
    this.width = 100;
    this.height = 100;

    //player speed/velocity on each axis
    this.vx = 0;
    this.vy = 0;

    //player color
    this.color = "#530BDB";

    //draws player on screen
    this.draw = function()
    {
        context.save();
            context.beginPath();
            context.arc(this.x, this.y, this.width / 2, 0, 360 * Math.PI / 180, true);
            context.closePath();
            context.fillStyle = this.color;
            context.fill();
        context.restore();
    }

    //changes the player position
    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }

}