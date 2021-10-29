var supersir, tombsmash, timoso, skabag, cochat 

function setup() {
  createCanvas(800,400);
  tombsmash = createSprite(400, 200, 50, 50);
  supersir = createSprite(200, 150, 50, 50);
  timoso = createSprite(300, 100, 50, 50);
  skabag = createSprite(250, 120, 50, 50);
  cochat = createSprite(100, 220, 50, 50);
}

function draw() {
  background(255,255,255); 
  drawSprites();
}