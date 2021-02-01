
var fixedRect,movingRect,object1,object2

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  
  movingRect = createSprite(400, 200, 100, 50);
  movingRect.shapeColor = "red";

  object1 = createSprite(200,50,40,40);
  object1.shapeColor = "blue";
  object1.velocityY = 3;
  
  object2 = createSprite(200,200,40,90);
  object2.shapeColor = "yellow";
  object2.velocityY = -3;
  fixedRect.debug = true;
  movingRect.debug = true;

}



function draw() {
  
  background(0); 
  bounceOff(object1,object2);

  
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  
  if(isTouching(movingRect,object1)) {

      movingRect.shapeColor = "green";
      object1.shapeColor = "green";
    
  }

  else{movingRect.shapeColor = "red";}
 
  
  drawSprites();
}