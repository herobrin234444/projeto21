
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var solo,parede,parede2;
var bola,ballop;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	solo = new Ground(400,680,800,40);
	parede = new Ground(500,601,20,120);
	parede2 = new Ground(650,601,20,120);
	
	ballop = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.4
	}
	bola = Bodies.circle(260,100,20,ballop);
	World.add(world,bola);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	solo.display();
	parede.display();
	parede2.display();
	ellipse(bola.position.x,bola.position.y,40);
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bola,bola.position,{x:70,y:-70});
	}
}


