
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dust1, dust2, dust3, gameState, dustbin

function preload()
{
	dustbin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
  dust3 = createSprite(890, 560, 95, 50);

	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
 dust3.addImage(dustbin,"dust.bin");
 dust3.scale = 0.65;

	//Create the Bodies Here.
	var gOptions = {
		isStatic: true
	}
	fill('yellow');
  ground = Bodies.rectangle(width/2, 660, width, 20, gOptions);
  World.add(world, ground);
  paper = new Paper(50,640,25);
  dust1 = new Dustbin(960, 565, 10, 160)
  dust2 = new Dustbin(810,580, 10, 135 );
  
  
  gameState = 0;

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,4000,20);
  if(gameState == 0){
    fill('black');
    textSize(40);
    text("Press Space to Play", 610,200);
  
      }
  if(keyDown(32) && gameState === 0){
    gameState = 1;
  }
  if(gameState == 1){
  fill('purple');
  paper.display();
  
  fill('white')
  dust1.display();
  dust2.display();
  fill('black')
  textSize(30)
  text("Use the UP Arrow key to throw the trash", 500, 200);
  text("Reload To Play Again", 610, 400);
  drawSprites();
   
}

}
function keyPressed(){
if (keyCode === UP_ARROW ) {
  Matter.Body.applyForce(paper.body, paper.body.position, {
    x: 149,
    y: 240
    });
}
if(1000 >paper.body.position.x > 800){
  paper.body.position.y = 540;
  paper.body.position.x = 900;
}
}

