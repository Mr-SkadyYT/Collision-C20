var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  movingRect = createSprite(200,200,70,70);
  movingRect.shapeColor = "yellow";
}

function draw() {
  background(55,255,55);  

  movingRect.y = mouseY;
  movingRect.x = mouseX;

 if (movingRect.x - fixedRect.x<fixedRect.width/2 + movingRect.width/2)  {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
}
else {fixedRect.shapeColor = "yellow";
     movingRect.shapeColor = "yellow";
     
 }
   
  drawSprites();
 }