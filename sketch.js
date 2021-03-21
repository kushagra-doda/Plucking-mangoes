const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,boy, boyImg, stone;
var tree, treeImg, sun, sunImg, cloud, cloudImg, cloudGroup, invisibleGround;

function preload(){
	treeImg = loadImage("tree.png");
	sunImg = loadImage("sun.png");
	cloudImg = loadImage("cloud.png");
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	tree = createSprite(width - 300, 450, 10, 10);
	tree.addImage(treeImg);
	tree.scale = 2.5;

	sun = createSprite(10,10,10,10);
	sun.addImage(sunImg);

	mango1 = new Mango(1000,400,10);
	mango2 = new Mango(10,20,10);
	mango3 = new Mango(10,30,10);
	mango4 = new Mango(10,40,10);
	mango5 = new Mango(10,50,10);
	mango6 = new Mango(10,60,10);
	mango7 = new Mango(10,70,10);
	mango8 = new Mango(10,80,10);
	mango9 = new Mango(10,90,10);
	mango10 = new Mango(10,100,10);

	rock = new Rock(10,10,10);

	boy = createSprite(350,650,10,10);
	boy.addImage(boyImg);
	boy.scale = 1.0;  
	slingshot = new SlingShot(rock.body,{x: 400 , y: 650});



	invisibleGround = createSprite(0,0,2000,2000);
	invisibleGround.visible = false;
	invisibleGround.addImage(sunImg);
	invisibleGround.scale =  5;
	
    ground = new Ground(600,height,1900,55);

	  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(102,153,255);
  
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  rock.display();

  slingshot.display();

  mango1.depth = tree.depth; 
  mango1.depth = mango1.depth + 1;  

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	slingshot.fly();
	gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(rock.body);
    }
}

function detectCollision(){
	
}