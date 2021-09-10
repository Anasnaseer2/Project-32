const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint


var engine,world;
var ball,blower,blowermouth,button



function setup() {
  createCanvas(500,500);
  engine=Engine.create();
  world=engine.world
  
  ball=new Ball(width/2+80,height/2-80,80,80)
  blower=new Blower(width/2-50,height/2+50,100,20)
  blowermouth=new Blowermouth(width/2+70,height/2+20,100,90)

  button=createButton("Click to blow")
  button.position(width/2,height-100)
  button.class("blowbutton")
  button.mousePressed(blow);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
  blower.show()
  blowermouth.show()
  ball.show() 
  
}
function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}