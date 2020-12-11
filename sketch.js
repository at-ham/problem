var player,ship,bomber,fighter,ssubmarine,aircraft;
var edges;
var deltaX = 0;
var deltaY = 0;
var backGroundImg;

function setup() {
  createCanvas(displayWidth,displayHeight-112);
  player = createSprite(400,400,50,50);
  player.shapeColor="black";
  edges = createEdgeSprites()
  ssubmarine=createSprite(100,600,40,40)
  ssubmarine.shapeColor = "blue";
  ssubmarine.velocityX=2;

  airplane=createSprite(600,200,40,40)
  airplane.shapeColor = "red";
  airplane.velocityX=2;
}
function preload(){

  backGroundImg = loadImage("download.jpg");
}

function draw() {
  background(backGroundImg);  
  drawSprites();
  move();
  bullets(ssubmarine);
  ssubmarine.bounceOff(edges)
  battleships()
  airplane.bounceOff(edges)
  bullets(airplane)
}


function move(){
  if(keyDown("a")){
    player.velocityX=-40;
  }
  if (keyWentUp("a")){
    player.velocityX=0
  }
  if(keyDown("d")){
    player.velocityX=40;
  }
  if (keyWentUp("d")){
    player.velocityX=0
  }
}


function bullets(enemy){
  if(frameCount % 25 == 0){
     shot=createSprite(enemy.x,enemy.y,5,5);
     shot.shapeColor= "black";

     var shotVelocity = 5
     var shotAngle = 0
     deltaX = player.x - shot.x;
     deltaY = player.y - shot.y;
     shotAngle = Math.atan(deltaY / deltaX); 

     if (deltaX < 0) {
      // the arctan assumes that the angle is in the first or 
      // fourth quadrants, so if it's in the second or third
      // (i.e. deltaX/cosign is negative) correct by adding PI
      shotAngle = shotAngle + Math.PI;
    }
    shot.velocityX = shotVelocity * Math.cos(shotAngle);  
    shot.velocityY = shotVelocity * Math.sin(shotAngle);
  }
}

function battleships(){
    var position = 0,flag = 1;
    var aa = Math.round(random(1,2));
    console.log(aa)
    if(frameCount %100 == 0){
      if (aa === 1){
          position = -300; 
          flag = -1
        }
        if (aa === 2){
          position  = 1400;
        }
        ship =createSprite(position,400,45,45);
        ship.velocityX= flag *2;
        ship.shapeColor ="green";
        bullets(ship);
    }
}







