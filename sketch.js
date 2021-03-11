var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80)
  speed = random(223,321);
  
  weight = random(30,52)
  thickness = random(22,83);
  bullet.velocityX = speed;
}

function draw() {
  background("black");  

  if (wall.x-bullet.x < (bullet.width+wall.width/2)){
    bullet.velocityX = 0 ;

    var deformation = 0.5 *weight *speed *speed / 22509;

    if ( deformation>100){
      bullet.shapeColor = "white"
    }

    if(deformation>100&&deformation<180){
      bullet.shapeColor = "white"
    }

    if(deformation>182){
      bullet.shapeColor = "white"
    }
  }

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage<10){
      wall.shapeColor = "green"
    }

    if(damage>10){
      wall.shapeColor = "red"
    }
  }
  
  

  drawSprites();
}

function hasCollided( lbullet,  lwall){
  bulletRightEdge = lbullet.x + lbullet.width
  wallLefttEdge = lwall.x;
  if(bulletRightEdge>=wallLefttEdge){
    return true
  }
  return false
 
  
}