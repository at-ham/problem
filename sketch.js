var player,ship,bomber,fighter,ssubmarine,aircraft;
var edges;
var deltaX = 0;
var deltaY = 0;

function setup() {
  createCanvas(displayWidth,displayHeight-112);
  player = createSprite(400,400,50,50);
  player.shapeColor="black";
  edges = createEdgeSprites()
  ssubmarine=createSprite(100,600,40,40)
  ssubmarine.shapeColor = "blue";
  ssubmarine.velocityX=2;

}

function draw() {
  background(128);  
  drawSprites();
  move();
  bullets(ssubmarine);
  ssubmarine.bounceOff(edges);
  battleships()
}


function move(){
  if(keyDown("a")){
    player.velocityX=-5;
  }
  if (keyWentUp("a")){
    player.velocityX=0
  }
  if(keyDown("d")){
    player.velocityX=5;
  }
  if (keyWentUp("d")){
    player.velocityX=0
  }
}



// function submarine(){

//       ssubmarine=createSprite(100,600,40,40)
//       ssubmarine.shapeColor = "blue";
//       ssubmarine.velocityX=2;
//       bullets();
//       ssubmarine.bounceOff(edges);
// }

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
//ship.x = Math.round(random(200,600))
function battleships(){
  var position,ship;
if (frameCount%500 ===0){
  var aa = Math.round(random(1,2));
  console.log(aa)
   if (aa === 1){var position = -300; 
      ship =createSprite(position,400,45,45);
      ship.velocityX=2;
      console.log(ship.x);
      if(ship.x%10 === 0){
        bullets(ship)
      }
    }
   if (aa === 2){var position = 1400;
    ship =createSprite(position,400,45,45);
    ship.velocityX=-2
    }
    ship.shapeColor ="green";
    if(frameCount%50 === 0){
      bullets(ship)
    }
  }

}







