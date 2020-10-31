const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1,rope2,rope3,rope4,rope5;
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var roofobject;



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	//creating bobobjects
	bobobject1 = new Bob(200,200,40,40);
	bobobject2 = new Bob(200,400,40,40);
	bobobject3 = new Bob(200,600,40,40);
	bobobject4 = new Bob(200,800,40,40);
	bobobject5 = new Bob(200,1000,40,40);
	
	//creating roofobject
	roofobject = new Roof(50,50,10,20);

	//creating ropes
	rope1 = new Rope(bobobject1.body,roofobject.body, radius*2, 0);
	rope2 = new Rope(bobobject2.body,roofobject.body, radius*2, 0);
	rope3 = new Rope(bobobject3.body,roofobject.body, radius*2, 0);
	rope4 = new Rope(bobobject4.body,roofobject.body, radius*2, 0);
	rope5 = new Rope(bobobject5.body,roofobject.body, radius*2, 0);

}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("black");
  
  drawSprites();
}

function keyPressed()
{	 
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(rope1.body,rope1.body.position,{x:-10});
		Matter.Body.applyForce(rope2.body,rope2.body.position,{x:2});
		Matter.Body.applyForce(rope3.body,rope3.body.position,{x:2});
		Matter.Body.applyForce(rope4.body,rope4.body.position,{x:2});
		Matter.Body.applyForce(rope5.body,rope5.body.position,{x:10});
	}
}