const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bird;

var slingShot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);



  
    bird = new Bird(200,70);

    bird2 = new Bird(240,70);

    bird3 = new Bird(280,70);

    bird4 = new Bird(320,70);

    bird5 = new Bird(360,70);
   


    slingShot = new SlingShot(bird.body,{x:200, y:50});
    slingShot2 = new SlingShot(bird2.body,{x:240, y:50});
    slingShot3 = new SlingShot(bird3.body,{x:280, y:50});
    slingShot4 = new SlingShot(bird4.body,{x:320, y:50});
    slingShot5 = new SlingShot(bird5.body,{x:360, y:50});
  
    Engine.run(engine);
    
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();

    bird.display();
    bird2.display();
    bird3.display();
    bird4.display();
    bird5.display();

    slingShot.display();    
    slingShot2.display();    
    slingShot3.display();    
    slingShot4.display();    
    slingShot5.display();    

}

function keyPressed(){
	if(keyCode === UP_ARROW){
        Matter.Body.setPosition(bird.body, {x:0,y:0}); 	}
}




