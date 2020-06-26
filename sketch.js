const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob6,bob7;
var chain1,chain2,chain3,chain4,chain5,chain6,chain7;
var topBar;

function preload(){
  
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  
  bob2=new BOB(200,200);
  bob3=new BOB(250,200);
  bob4=new BOB(300,200)
  bob5=new BOB(350,200);
  
  bob2.debug=true;
  
 
  

  
  chain2=new Chain(bob2.body,{x:200,y:0});
  chain3=new Chain(bob3.body,{x:250,y:0});
  chain4=new Chain(bob4.body,{x:300,y:0});
  chain5=new Chain(bob5.body,{x:350,y:0});
  

  topBar=new Bar(600,0,1200,10);

}

function draw() {
  background(240);  
  Engine.update(engine);
  
  
  

  
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  

  
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 

  topBar.display();

 
    
  

  textSize(20);
  text("Drag and Leave the  Right BOB",183,380);
  text("Till Here",1000,100)
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(bob2.body, bob2.body.position, {x:-500,y:-20});
  }
}
