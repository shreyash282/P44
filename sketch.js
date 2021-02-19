var boy,bg,boyimg,bgimg
var obstacleimg,deadlyplantimg

function preload(){
boyimg = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png")
bgimg = loadImage("background.jpg")
obstacleimg = loadImage("obstacle1.png")
deadlyplantimg = loadImage("obstacle2.png")

}
 function setup() {
     createCanvas(1200,700);
     bg = createSprite(100,100)
     bg.addImage(bgimg)
     bg.x = bg.width/2
bg.velocityX = -3
bg.scale = 3

boy = createSprite(100,600)
boy.addAnimation("skating",boyimg);
boy.scale = 0.5
 }
function draw(){
    background("black")
    if(bg.x < 0){
        bg.x = bg.width/2
    }
    drawSprites()
}
