var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
  fixedRect1 = createSprite(100,200,50,40)
 fixedRect1.shapeColor = "yellow"
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect1)){
   movingRect.shapeColor = "blue"
   fixedRect1.shapeColor = "blue" 
  }
  else {
    movingRect.shapeColor = "green";
   fixedRect1.shapeColor = "yellow" ;
    fixedRect.shapeColor = "green" ;
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}


}
