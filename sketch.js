//game states
var PLAY=1;
var END=0;
var gameState=1;

//call fruits and enemy function
fruits();
Enemy();

var knife
var knifeimage
var fruit, enemy
var fruit1, fruit2, fruit3, fruit4
var fruit1Image, fruit2Image, fruit3Image, fruit4Image

var fruitGroup

var World

function preload(){
 knifeimage=loadImage("sword.png") 
 fruit1Image=loadImage("fruit1.png")
 fruit2Image=loadImage("fruit2.png")
 fruit3Image=loadImage("fruit3.png")
 fruit4Image=loadImage("fruit4.png")


 
}
function setup() {

knife=createSprite(40,200,20,20);
knife.addImage(knifeimage)
knife.scale=0.7

//move knife with mouse
knife.y=World.mouseY;
knife.x=World.mouseY;

//increase score if sword touching fruit
if(fruitGroup.isTouching(knife)){
  fruitGroup.detroyEach();
  score=score+2;
}
}



function draw(){

}

function fruits() {
if(World.frameCount%80===0){
  fruit=createSprite(400,200,20,20);
  fruit.scale=0.2;
  //fruit.debug=true
  r=Math.round(random(1,4));
  if (r==1){
    fruit.addImage(fruit1);
  } else if (r==2) {
    fruit.addImage(fruit2);
  } else if (r==3) {
    fruit.addImage(fruit3);
  } else {
    fruit.addImage(fruit4);
  }
  
  fruit.y=Math.round(random(50,340));
  
  fruit.velocityX=-7;
  fruit.setLifetime=100;
  
  fruitGroup.add(fruit);
  }
  
function Enemy(){
 if(World.frameCount%200===0){
  monster=createSprite(400,200,20,20);
  monster.addImage("moving", monsterImage);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-8;
   monster.velocitysetLifetime=50;
   
   enemyGroup.add(monster);
  
   
 }
  
  //Change the animation of sword to gameover and rest its postition
  knife.addImage(gameOverImage);
  knife.x=200;
  knife.y=200;
  
  
  
  
  
  
  
}
 }
  
  
  
  

