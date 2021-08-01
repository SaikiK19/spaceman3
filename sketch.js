const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var sewerman
var platform1
var start
var bg_img
var asteroid_img,ship_img;
var score_dis,score = 0;
var gameState = 'Play'
var platformArray = []


function preload() {
  asteroid_img = loadImage("asteroid.png")
  ship_img = loadImage("spacebattle_08.png")
  bg_img = loadImage("space.png")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  createCanvas(displayWidth - 50, displayHeight - 150);
  sewerman = createSprite(400, 400, 80, 80)
  sewerman.velocityX = 8
  sewerman.addImage(ship_img)
  sewerman.scale = 0.5
}
function keyReleased() {

}
function draw() {
  background(bg_img)
  fill(0,0,0)
  textSize(24)
  text("Score: "+score,sewerman.x+850,50)
  textSize(14)
  start = text("To Start the Game press the Up Arrow, use the Up Arrow to move up and press the down arrow to move down, be careful not go off screen or you lose,if you also get stopped by an asteroid you lose, GOOD LUCK", sewerman.x-175 , 100)
  if (frameCount % 30 === 0 && gameState == 'Play') {
    platform1 = createSprite(100, 50, 60, 30)
    score = Math.round(frameCount/20)
    platform1.x = random(sewerman.x + 950, sewerman.x + 1050)
    platform1.y = random(110, sewerman.y + 500)
    platform1.addImage(asteroid_img)
    platform1.scale = 0.5
    platformArray.push(platform1)
  }
  if (sewerman.y <= 0 || sewerman.y >= 775|| sewerman.velocityX == 0){
    gameState = 'End'
    fill(0,0,0)
    textSize(32)
    sewerman.velocityY = 0
    text('YOU LOSE', sewerman.x+300, 400)
  }
  if(sewerman.velocityX == 0){
    gameState = 'End'
    fill(0,0,0)
    textSize(32)
    sewerman.velocityY = 0
    text('YOU LOSE', sewerman.x+300, 400)
  }
  if(score >= 100){
    gameState = 'End'
    fill(0,0,0)
    textSize(32)
    sewerman.velocityY = 0
    text('YOU WIN', sewerman.x+300, 400)
  }

  if(gameState == 'End'){
    for(var i = 0;i<platformArray.length;i++){
      platformArray[i].destroy()
    }
  }
  move()
  drawSprites()
}
function move() {
  sewerman.collide(platformArray)
  if (keyIsDown(UP_ARROW)&& gameState == 'Play') {
    sewerman.velocityY = -12
  }
  if (keyIsDown(DOWN_ARROW)&& gameState == 'Play') {
    sewerman.velocityY = +12
  }
  if (keyIsDown(LEFT_ARROW)&& gameState == 'Play') {
    sewerman.velocityx = +8
  }


  camera.position.x = sewerman.x + 500
}