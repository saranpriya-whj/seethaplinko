const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight=250;
var score = 0;

var turns = 0;
var gamestate = "play";
var yellowLine;

function setup() {
  createCanvas(800, 750);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height-10,width,20);

   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2-20, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
      plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
      plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
      
      plinkos.push(new Plinko(j,375));
    } 
    
    if(frameCount%60===0){
     particle.push(new Particle(mouseX, 10,10));
    //   score++;
     }
}
 
function draw() {
  background("black");
  Engine.update(engine);

  if(gamestate !== "end"){
    textSize(20)
    text("Score : "+score,20,30);
  
 
  
  }

  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
 
  for (var j = 0; j < particle.length; j++) {
    particle[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  if(score === 2500){
    gameState = "end";
  }
   ground.display();
  
}

function mousePressed(){
    particle = new Particle(200, 5,10);
    particle.scoring();
   
}