
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bobt2,bob3, bob4,bob5, roof
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof =new Roof(400,250,250,70);
	bob1 = new Bob(320,520,40)
	bob2 = new Bob(360,520,40)
	bob3 = new Bob(400,520,40)
	bob4 = new Bob(440,520,40)
	bob5 = new Bob(480,520,40);
	
	
	rope1=new Rope(bob1.body,roof.body,-80, 0)
	rope2=new Rope(bob2.body,roof.body,-40, 0)
	rope3=new Rope(bob3.body,roof.body,-0,0)
	rope4=new Rope(bob4.body,roof.body,+40,0)
	rope5=new Rope(bob5.body,roof.body,+80,0)
	
	Engine.run(engine);
	

  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  textFont("algerian")
  textSize(30)
  fill ("black")
  text("Newton’s cradle",290,80)
  textFont("cambria")
  textSize(20)
  text("Newton's Cradle demonstrates the principle of the conservation of momentum .",20,105)
  text("before the collision is equal to the total momentum of the objects after the collision.",20,130)
  roof.display();



  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}






