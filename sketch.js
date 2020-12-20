var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftBox,rightBox,downBox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
fill("red")
	leftBox=createSprite(300,615,20,100);
	rightBox=createSprite(450,615,20,100);
	downBox	= createSprite(375,660,130,20);
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	downBox = Bodies.rectangle({isStatic:true});
	//downBox.fill("red");
	World.add(world, downBox);

	leftBox = Bodies.rectangle({isStatic:true});
	World.add(world, leftBox);

	rightBox = Bodies.rectangle( {isStatic:true});
    World.add(world, rightBox)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  rectMode(CENTER);
  rect(leftBox.position.x, leftBox.position.y, leftBox.width, leftBox.height)
  rectMode(CENTER);
  rect(rightBox.position.x, rightBox.position.y, rightBox.width, rightBox.height)
  rectMode(CENTER);
  rect(downBox.position.x, downBox.position.y, downBox.width, downBox.height) 
  
	
  if(keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(packageBody,false)
}
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



