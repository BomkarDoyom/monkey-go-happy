var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var ground;
var bananaGroup;
var score =0;
var gameState="PLAY";

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  //creating groups
 
  
}



function setup() {
  createCanvas(600,600)
 
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
    ground.x=ground.width/2;
//creating groups
obstacleGroup=new Group();
 foodGroup=new Group();
 
}


function draw() {

  background("white");

 if (gameState==="PLAY"){
 
   if (ground.x < 0){
    ground.x=ground.width/2;
 } 
if (keyDown ("space")&&monkey.y<=600) {
  monkey.velocityY=-12;  

}  
monkey.velocityY=monkey.velocityY+0.8;
obstaclesGro();
 bananaGro(); 
    
  if(obstacleGroup.isTouching(monkey)){
  
  gameState="END";
} 
  
   
   
 }
 else if(gameState==="END"){
         
  ground.velocityX=0;
  monkey.velociyY=0;
  obstacleGroup.setVelocityXEach(0);
  foodGroup.setVelocityXEach(0);
  obstacleGroup.setLifetimeEach(-1);
  foodGroup.setLifetimeEach(-1);
       
         
         
         }
  

  // console.log(monkey);
  //adding gravity
 monkey.collide(ground) ;
  
 
  drawSprites();
    
}
     
function bananaGro() {
if (frameCount%80===0){
 banana=createSprite(200,150,50,50) 
  banana.velocityX=-4;
 
  banana.addImage(bananaImage);
 banana.scale=0.1; 
banana.y=Math.round(random(120,200));
//banana.x=600;
banana.lifeTime=50;

  foodGroup.add(banana);
}

}

function obstaclesGro(){
if (frameCount%300===0){  
 obstacle=createSprite(800,320,50,50) 
 obstacle.addImage(obstacleImage);
 obstacle.scale=0.2;
  
  obstacle.velocityX=-4;

  obstacle.lifetime=300;

obstacleGroup.add(obstacle);
}

}


