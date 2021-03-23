
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var spaceship, missile, background;
var enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9;
//function preload()
//{}
	


function setup() {
	createCanvas(1200, 650);

    spaceship = createSprite(600,550,40,40);
  enemy1 = createSprite(200,100,20,20);
  enemy2 = createSprite(300,100,20,20);
  enemy3 = createSprite(400,100,20,20);
  enemy4 = createSprite(500,100,20,20);
  enemy5 = createSprite(600,100,20,20);
  enemy6 = createSprite(700,100,20,20);
  enemy7 = createSprite(800,100,20,20);
  enemy8 = createSprite(900,100,20,20);
  enemy9 = createSprite(1000,100,20,20);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(RIGHT_ARROW)){
	  spaceship.x = spaceship.x + 5
  }
  if(keyDown(LEFT_ARROW)){
	spaceship.x = spaceship.x - 5
}
  if(keyDown("space")){
	missiles = createSprite(600,500,10,10);
	missiles.velocityY = -5
  }
  drawSprites();
 
}



