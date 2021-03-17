var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
 
   // music = loadSound("music.mp3");
}


function setup(){
   
    createCanvas(800,600);
    
    surface1 = createSprite(150,500,100,30);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,500,100,30);
    surface2.shapeColor = "blue";

    surface3 = createSprite(450,500,100,30);
    surface3.shapeColor = "pink";

    surface4 = createSprite(600,500,100,30);
    surface4.shapeColor = "yellow";
  
    box = createSprite(random(20,750),300,50,50);
    box.shapecolor = "white";
    box.velocityX = 7;
    box.velocityY = 7;


    //create box sprite and give velocity

}

function draw() {
   
    background("black");
    
    edges = createEdgeSprites()
    //box.velocityX = 2;
    //box.velocityY = 2;
    
     box.bounceOff(edges); 
     //box.bounceOff(surface1); 
     //box.bounceOff(surface2); 
     //box.bounceOff(surface3); 
     //box.bounceOff(surface4);
    

    if(box.isTouching(surface1) && box.bounceOff(surface1)){
        box.shapeColor = "red";
    }

    if(box.isTouching(surface2) && box.bounceOff(surface2)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
    }

    if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor = "pink";
    }

    if(box.isTouching(surface4) && box.bounceOff(surface4)){
        box.shapeColor = "yellow";
    }

    drawSprites();


    //add condition to check if box touching surface and make it box
}
