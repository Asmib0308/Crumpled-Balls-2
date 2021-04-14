const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper, dustbin, ground

function preload(){
  binImg = loadImage("sprites/dustbingreen.png")
  
}

function setup(){
    var canvas = createCanvas(1600,700);

    bin=createSprite(1300,573,10,10);
    bin.addImage(binImg);
    bin.scale = 0.66;

    engine = Engine.create();
    world = engine.world;

    paper = new Paper();

    ground = new Ground(800,690,1600,15);

    dustbin1 = new Dustbin(1300,675,166,15);
    dustbin2 = new Dustbin(1222,607,10,140)
    dustbin3 = new Dustbin(1378,607,10,140);
    
}

function draw(){
    background("grey");
    Engine.update(engine);

    ground.display();
    dustbin2.display();
    dustbin3.display();
    dustbin1.display();
    drawSprites()
    paper.display();

    textSize(65)
    stroke("black")
    fill("white")
    text("Crumpled Balls",600,50)

    textSize(30)
    stroke("white")
    fill("black")
    text("press 'Space' to throw th crumpled ball",588,80)


}

function keyPressed(){
    if (keyCode === 32 ) {
      Matter.Body.applyForce(paper.body, paper.body.position, {x: 19,y: -19})
    }
  }
