var path, pathimg
var runner, runnerimg
var limite1
var limite2

function preload(){
  //imagens pré-carregadas
  pathimg = loadImage ("path.png");
  runnerimg = loadAnimation ("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path = createSprite (200,200);
  path.addImage (pathimg)
  
  runner = createSprite (200,350);
  runner.addAnimation ("runner", runnerimg)
  runner.scale = 0.1

  limite1 = createSprite (0,200,10,400);
  limite2 = createSprite (400,200,10,400)
  limite1.visible = false;
  limite2.visible = false;

}

function draw() {
  background(0);
  path.velocityY = 2
  if (path.y > 400) {
    path.y = height/2;
  }

  runner.x = mouseX

  runner.collide(limite1);
  runner.collide(limite2);


drawSprites();
}
