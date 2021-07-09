
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runningAnimation = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 3;
  path.scale = 1;

  boy = createSprite(200,200);
  boy.addAnimation(runningAnimation);

  leftBoundary = createSprite(10,200);
  rightBoundary = createSprite(390,200);
  leftBoundary.visible = false ;
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  boy.x = World.mouseX ;
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  drawSprites();
}
