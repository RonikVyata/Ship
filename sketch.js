//declaring variables
var ship,shipImg1;
var sea,seaImg; 

//load the images
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");

}

function setup(){
  //create canvas
  createCanvas(400,400);
  
  sea = createSprite(300,180,600,10);
  sea.addImage("Ronik is going in the sea", seaImg);
  sea.velocityX = -4;
  sea.scale = (0.30);
}

function spawnShip(){
  if(frameCount%140 ===0){
  //create a ship sprite
  ship = createSprite(50,160);
  ship.addAnimation("Ronik is driving the ship", shipImg1);
  ship.scale = (0.2);
  ship.velocityX = 3;
  }
}

function draw() {
  background("black");

  spawnShip();

  drawSprites();

  if(sea.x<0){
  sea.x = width/2
  }

}
    