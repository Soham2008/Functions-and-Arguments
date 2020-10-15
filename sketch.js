var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(1000, 400, 50, 50);
  gameObject1.shapeColor = "blue";
  gameObject1.velocityX=-3
  gameObject2 = createSprite(200, 400, 50, 100);
  gameObject2.shapeColor = "yellow";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(200, 10, 50, 50);
  gameObject4.shapeColor = "green";
  gameObject4.velocityY=2
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

bounceOff(gameObject1,gameObject2);
bounceOff(gameObject2,gameObject4);

  if (isTouching(movingRect,gameObject3)) {
    //change the color to red
    movingRect.shapeColor = "blue";
    gameObject3.shapeColor = "blue";
  }
  else {
    //change the color to green
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(object1, object2) {
  if (object1.x - object2.x < object2.width / 2 + object1.width / 2
    && object2.x - object1.x < object2.width / 2 + object1.width / 2
    && object1.y - object2.y < object2.height / 2 + object1.height / 2
    && object2.y - object1.y < object2.height / 2 + object1.height / 2) {
    //YES
    return true;
  }
  else {
    //NO
    return false;
  }
}

function bounceOff(object1,object2){
if(object1.x - object2.x < object2.width / 2 + object1.width / 2
  && object2.x - object1.x < object2.width / 2 + object1.width / 2){
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if(object1.y - object2.y < object2.height / 2 + object1.height / 2
  && object2.y - object1.y < object2.height / 2 + object1.height / 2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}
}