var player, worms, wormGroup, playerImage, backgroundImage, bg, wormImage,score = 0;

function preload() {
  //load game assets
 playerImage = loadImage("images/frog.png");
 backgroundImage = loadImage("images/swampImg.png");
 wormImage = loadImage("images/worm.png")
}


function setup() {
  createCanvas(600,600);
 
  bg = createSprite(300,300)
  bg.addImage(backgroundImage)
  bg.scale = 2.5 



  player = createSprite(40,550,30,30);
  player.addImage(playerImage)
  player.scale = 0.4

  wormGroup = new Group()
}

function draw() {

  background("black");
  stroke("red");
  // noFill(); 
  // ellipse(100,350,40,30);

  player.x = mouseX
  player.y = mouseY

  // if(player.x>90 && player.x<150 && player.y>340 && player.y<390){
  //   text("no cheating", 200,200)
  //   player.x = 30 
  //   player.y = 30
  // }

  generateWorms();

  for(var i = 0; i < wormGroup.length; i++){
    var temp = wormGroup.get(i)
    if(player.isTouching(temp)){
      temp.destroy()
      score++
    }
  }

  drawSprites();
  textSize(20)
  text("worms destroyed = " + score, 350,50)
}

function generateWorms(){
  if(frameCount % 20 == 0 ){ 
  worms = createSprite(random(40,380),random(290,380),40,5);
  worms.addImage(wormImage)
  worms.scale = random(0.1,0.3)
  worms.velocityX = random(-6,6)
  worms.velocityY = random(-6,6)
  console.log(frameCount)
  worms.shapeColor = "green"
  wormGroup.add(worms)

  }
}