  var car,wall;
  var speed,height;

function setup() {

  createCanvas(1200,550);

  speed=random(55,90);
  weight=random(400,1500);

  wall= createSprite(1100, 250, 60, height/2);
  wall.shapeColor="brown";

  car= createSprite(50, 250, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";

}

function draw() {

  background("black");  

  if(isTouching(car,wall));

  drawSprites();

}
