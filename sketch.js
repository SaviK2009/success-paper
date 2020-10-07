
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  P1=new paper(30,695,30,30);
  g1=new Ground(750,700,1500,20);
  //b1=new Bin(600,650,100,10); 
  //b2=new Bin(650,650,10,100);
  //b3=new Bin(550,650,10,100);

  bin= new Bin(1200,680)
	//Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("white");
  
  g1.display();
  // b1.display();
  // b2.display();
  // b3.display();
  P1.display();
  bin.display();
   
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(P1.body, P1.body.position,{x:14,y:-20});
	}
}

