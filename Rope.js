class Rope
{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = 
        {
            bodyA : body1,
            bodyB : body2,
            pointB : {x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        push ();
        rectMode (CENTER);
        fill ("brown");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop ();
    }
    
}
