const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;

function preload(){

   
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    var option ={
        'restitution':0.8,
        'friction':1.0,
        'density':0.1  
    }
    ball = Bodies.circle(400,150,50,option)
    World.add(world,ball)

    roption = {
        bodyA:ball,
        pointB:{x:400,y:150},
        length:150

    }
    rope = Constraint.create(roption);
    World.add(world,rope)

    box1 = new Box(600,520)
    box2 = new Box(680,520)
    box3 = new Box(760,520)
    box4 = new Box(600,440)
    box5 = new Box(680,440)
    box6 = new Box(760,440)
    box7 = new Box(600,360)
    box8 = new Box(680,360)
    box9 = new Box(760,360)
    box10 = new Box(600,280)
    box11 = new Box(680,280)
    box12= new Box(760,280)
    box13= new Box(600,200)
    box14= new Box(680,200)
    box15= new Box(760,200)
}

function draw(){
    background("white");
    

    Engine.update(engine);
    ground.display();

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50,50)

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

    line(ball.position.x,ball.position.y,400,150)



}
function mousePressed(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}