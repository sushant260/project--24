
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,bin1,bin2,bin3,garbage;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,685,1600,10);
	bin1 = new bin(630,673,70,15);
	bin2 = new bin(585,625,15,110);
	bin3 = new bin(675,625,15,110);
	garbage = new Garbage(150,670,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  garbage.display();
  
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(garbage.body,garbage.body.position,{x:24,y:-50});
			 
		
  
}
}
