function GameObject()
{
    this.drawRect = function()
    {
        //location of the player
        this.x = 20;
        this.y = 300;

        //player dimensions
        this.width = 30;
        this.height = 100;

        //player color
        this.color = "#0e9999";

        context.save();
            context.beginPath();
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);
        context.restore();
    }
}