
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roofobj;


function setup() {
createCanvas(800, 700);


engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
bob1 = new bob(450,450,100); 
bob1.shapecolor = color(255,132,25);
bob2 = new bob(500,450,100);
bob2.shapecolor = color(255,132,25);
bob3 = new bob(550,450,100); 
bob3.shapecolor = color(255,132,25);
bob4 = new bob(600,450,100);
bob4.shapecolor = color(255,132,25);
bob5 = new bob(650,450,100);
bob5.shapecolor = color(255,132,25);
roofobj = new roof(200,650,200,10);

Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(0);
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();


  drawSprites();
 
}



