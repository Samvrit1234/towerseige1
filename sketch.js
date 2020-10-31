const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var polygonimage;
function preload(){
      polygonimage = loadImage("0.png");
}

function setup() {
 // createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 var canvas = createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;

 

 polygon = Bodies.circle(100,100,10)
 World.add(world,polygon);
 polygon.scale = 0.8;

 //this.position.x = polygon.position.x;
 //this.position.y = polygon.position.y;
 

 
 

 slingshot = new SlingShot(this.polygon,{x:50,y:200});

  ground = new Ground(390, 240, 250, 40);

  box1 = new Box(330,200,30,40);
  box2 = new Box(360,200,30,40);
  box3 = new Box(390,200,30,40);
  box4 = new Box(420,200,30,40);
  box5 = new Box(450,200,30,40);
  box6 = new Box(300,200,30,40);
  box7 = new Box(480,200,30,40);
  box8 = new Box(360,160,30,40);
  box9 = new Box(390,160,30,40);
  box10 = new Box(420,160,30,40);
  box11 = new Box(450,160,30,40);
  box12 = new Box(330,160,30,40);
  box13 = new Box(360,120,30,40);
  box14 = new Box(390,120,30,40);
  box15 = new Box(420,120,30,40);
  box16 = new Box(390,80,30,40);

}

function draw() {
  background(255,255,255);  

  imageMode(CENTER);
  image(polygonimage,100,200);


  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  slingshot.display();
  



  drawSprites();


  function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(this.polygon);
        bodyA = null;
    }
}
}