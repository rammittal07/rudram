function setup() {
  createCanvas(800,400);
Staticrect  =  createSprite(400, 200, 50, 50);
movingrect = createSprite (100,200,50,50)
}

function draw() {
  background(255,255,255); 
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(movingrect.x-Staticrect.x <movingrect.width/2+Staticrect.width/2
    &&Staticrect.x-movingrect.x <movingrect.width/2+Staticrect.width/2){
    movingrect.shapeColor = "green" 
  Staticrect.shapeColor = "green"
  }
  else{
    movingrect.shapeColor = "red" 
    Staticrect.shapeColor = "red"   
  }
    drawSprites();
}