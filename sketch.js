const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var string, base, ball;

function setup(){
    createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
    //making ground
    ground = new Ground(250,height,500,20);
    //make the base
    var baseOptions = {
        isStatic : true
    }
    base = Bodies.rectangle(200,100,200,20,baseOptions);
    World.add(world,base);
    //making the ball
    var ballOptions = {
        restitution : 1.0,
        density : 1.0
      }
    ball  = Bodies.circle(200,200,40,ballOptions);
    World.add(world,ball);
    //making the string
    var options = {
        bodyA : ball,
        bodyB : base,
        stiffness: 0.04,
        length : 200
      }
      var string = Constraint.create(options);
      World.add(world,string);
}

function draw(){
    background("black");
    Engine.update(engine);
    fill("blue");
    text("Press Space to oscillate the pendulam with the mouse",10,20);
    text("Press Enter to stop the Pendulum",100,50);
    //base
    fill ("#32CD32");
    rectMode(CENTER);
    rect(base.position.x,base.position.y,200,30);
    ball
    fill("orange");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40);
    //string
    strokeWeight(3);
    stroke("white");
    line(ball.position.x,ball.position.y,base.position.x,base.position.y)
    //movement
    if(keyCode === 32){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
    }
    else if (keyCode === ENTER){
    ball.position.x = 200;
    }
}
