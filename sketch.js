var rect1;
var rect2;

function setup() {
  createCanvas(1500,800);
  rect1 = createSprite(400, 200, 100, 100);
  rect2 = createSprite(800, 200,100, 100);
}

function draw() {
  background(255,255,255);  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  rect1.shapeColor= " green";
  rect2.shapeColor= " green";

  if(rect1.isTouching(rect2)){
    rect1.shapeColor= " red";
    rect2.shapeColor= " red";
    }

  drawSprites();
}