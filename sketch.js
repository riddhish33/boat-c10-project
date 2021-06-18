var boat,moving_boat
var sea,seaImage

function preload(){
seaImage=loadImage("sea.png")
moving_boat=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png") 
}

function setup(){
 
  createCanvas(600,400);
   sea=createSprite(300,200,600,20)
   sea.addImage ("s1",seaImage)
sea.scale=0.3
sea.velocityX=-2

   boat=createSprite(100,250,20,50)
   boat.addAnimation("moving",moving_boat);
   boat.scale=0.2
}

function draw() {
  background("blue");
 if (sea.x<0){
   sea.x=sea.width/8
 }

  drawSprites()

}  