
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,175,400,20)
	bob1 = new Bob(290,400,30)
	rope1 = new Rope(bob1.body,roof.body,{x:-80,y:0})

	bob2 = new Bob(330,400,30)
	rope2 = new Rope(bob2.body,roof.body,{x:-40,y:0})

	bob3 = new Bob(370,400,30)
	rope3 = new Rope(bob3.body,roof.body,{x:0,y:0})

	bob4 = new Bob(410,400,30)
	rope4 = new Rope(bob4.body,roof.body,{x:40,y:0})

	bob5 = new Bob(450,400,30)
	rope5 = new Rope(bob5.body,roof.body,{x:80,y:0})

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  roof.display()
  bob1.display()
  rope1.display()
  bob2.display()
  rope2.display()
  bob3.display()
  rope3.display()
  bob4.display()
  rope4.display()
  bob5.display()
  rope5.display()
  if(keyDown("UP")) {
	  Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}



