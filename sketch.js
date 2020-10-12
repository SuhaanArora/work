const World = Matter.World;
const Engine = Matter.Engine;
const Bodies= Matter.Bodies;

var engine, world;
/*var ground;
var ball;*/
var box1,box2;
var ground;
function setup() {
  createCanvas(400,400);
engine= Engine.create();
world= engine.world;
/*var ground_options={
isStatic: true
}
ground= Bodies.rectangle(200,380,50,50, ground_options);
World.add(world,ground);
var ball_options ={
restitution: 1.0
}
ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);*/

box1= new Box(100,200,50,50);
box2= new Box (140,100,50,50);
ground = new Ground (200,390,400,20) ; 
}

function draw() {
  background(0);  
  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  /*rectMode(CENTER)
  fill("brown")
  rect(ground.position.x,ground.position.y,400,50)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)*/
}