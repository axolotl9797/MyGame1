var obstacle, obstacle1Img, obstacle2Img, obstacle3Img, obstacle4Img, obstacle5Img, obstacle6Img, obstaclesGroup
var penguinImg, penguin
var backgroundImg, background
var InvisibleGround

function preload(){
  obstacle1Img=loadImage("./Images/obstacle1.jpg");
  obstacle2Img=loadImage("./Images/obstacle2.png");
  obstacle3Img=loadImage("./Images/obstacle3.avif");
  obstacle4Img=loadImage("./Images/obstacle4.png");
  obstacle5Img=loadImage("./Images/obstacle5.png");
  obstacle6Img=loadImage("./Images/obstacle6.webp");
  penguinImg=loadImage("./Images/penguin.png");
  backgroundImg=loadImage("./Images/background.jpg");
}

function setup(){
  canvas=createCanvas(900,900);
  background=createSprite(400,200,800,800);
  background.addImage(backgroundImg);
  background.velocityX=-5
  background.scale=1.5
  penguin=createSprite(100,800,50,200);
  penguin.addImage(penguinImg);
  penguin.scale=0.7
  InvisibleGround=createSprite(400,900,1000,10);
  InvisibleGround.visible=false;
  obstaclesGroup = createGroup();
  penguin.setCollider("circle",0,0,100);
  penguin.debug = true
 
}

function draw(){
  if(background.x<0){
    background.x=700
  }
  penguin.collide(InvisibleGround);
  if(keyDown("space")){
    penguin.velocityY-=20
  }
  penguin.velocityY=penguin.velocityY+10
  penguin.depth++

  createObstacles();
  if(penguin.isTouching(obstaclesGroup)){
    background.velocityX=0
  }
  drawSprites();

}
function createObstacles(){
  if(frameCount%100==0){
    obstacle=createSprite(800,800,90,100);
    obstacle.addImage(obstacle1Img);
    obstacle.scale=0.2   
  obstacle.velocity.x=-5
  
    num=Math.round(random(1,7))
    console.log(num)
    switch(num){
    case 1:
    obstacle.addImage(obstacle1Img)
    break
    case 2:
      obstacle.addImage(obstacle2Img)
     break
     case 3:
      obstacle.addImage(obstacle3Img)
     break
     case 4:
      obstacle.addImage(obstacle4Img)
   break
   case 5:
      obstacle.changeImage(obstacle5Img)
  break
    case 6:
      obstacle.changeImage(obstacle6Img)
   break
  }
  obstaclesGroup.add(obstacle);
  }
}





