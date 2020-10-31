class Bob
{
    constructor (x,y,radius)
    {
        var options = 
        {
            'isStatic' : false,
            'restitution' : 1.0,
            'friction' : 0.3,
            'density' : 1.2
        }
    
     this.radius = radius;
     this.body = Bodies.circle(x,y,this.radius ,options);
     World.add(world,this.body);
    }
    display(){
        var bobPosition = this.body.position;
        push ();
        fill ("pink");
        translate(bobPosition.x, bobPosition.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop ();
}
}