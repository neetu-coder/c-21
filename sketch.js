
var fixedRect , movingRect
var obj1 ,obj2
function setup() {
  createCanvas(800,400);

 fixedRect= createSprite(400, 200, 50, 50);
fixedRect.shapeColor ="blue"
 movingRect = createSprite (300,200,50,50)
 movingRect.shapeColor = "blue"

 obj1 = createSprite(250,300,50,50)
 obj1.velocityX = 3
obj1.shapeColor = "red"
 obj2 = createSprite (795,300,50,50)
 obj2.velocityX = -3
 obj2.shapeColor ="blue"
}

function draw() {
  background("gray");  
movingRect.x = mouseX
movingRect.y = mouseY

if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2 &&fixedRect.x -movingRect.x <fixedRect.width/2+ movingRect.width/2 
  &&movingRect.y -fixedRect.y < fixedRect.height/2+movingRect.height/2&&fixedRect.y- movingRect.y < fixedRect.height/2 + movingRect.height/2){
  fixedRect.shapeColor ="red"
  }else{
    fixedRect.shapeColor = "blue"
  }
bounceOff(obj1,obj2)

drawSprites();
}
