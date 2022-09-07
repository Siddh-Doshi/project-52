const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine, world
var ball, spider  
var ballImage, spiderImage,  RingImage, bgImage

function preload(){
    var ballImage = loadImage("basketball.jpeg")
    var spider1Image = loadImage("spider.png")
    var spider2Image = loadImage("spider.png")
    var RingImage = loadImage("ring_old.png")
    var brickImage = loadImage("brick.png")
    var homeImage = loadImage("home.png")
}
  
function setup(){
    canvas= createCanvas(950,470)
    engine = Engine.create()
world=engine.world
    ball=createSprite(31,45,43,56)
    ball.addImage(ballImage)
    spider=createSprite(61,85,45,53)
    spider.addImage(spider1Image)
    
    goldenRing=createSprite(31,45,43,56)
    goldenRing.addImage(goldenRingImage)
} 

function draw(){
    backround(180)

    drawSprites()
}
    


