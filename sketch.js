var trainimg,policeimg,barrier1img,barrier2img,coinimg,keyimg,openimg,savemeimg,traintrackimg
var Score=0
var coin,player,track1,track2,track3
var coinGroup

function preload(){
    trainimg=loadImage("subway surfers game/train.png")
    policeimg=loadImage("subway surfers game/Motu-1.png")
    barrier1img=loadImage("subway surfers game/barrier1.png")
    barrier2img=loadImage("subway surfers game/barrier2.png")
    coinimg=loadImage("subway surfers game/coin.png")
    keyimg=loadImage("subway surfers game/Key.png")
    openimg=loadImage("subway surfers game/openimage.png")
    savemeimg=loadImage("subway surfers game/save me.png");
    groundImage= loadImage("subway surfers game/scene.png");
   
}
function setup(){
    createCanvas(1000,800);
    
    track1= createSprite(500,400,1000,800);
    track1.addImage(groundImage);
    track1.scale=8;
    player=createSprite(500,750,20,30)
    player.addImage("playerimg",policeimg)
    player.scale=0.5
    coinGroup=new Group()
    


}
function draw(){
    background("white") 
    edges=createEdgeSprites()
    track1.velocityY=3
    
    player.bounceOff(edges)
    
    
    if(keyWentDown(UP_ARROW)){
        player.velocityY=-5
        }
        if(keyWentUp(UP_ARROW)){
            player.velocityY=0
        }
    if(keyDown(DOWN_ARROW)){
        player.x=500
    }
    if(keyDown(RIGHT_ARROW)){
        player.x=750
    }
    if(keyDown(LEFT_ARROW)){
        player.x=250
    }
    if(track1.y>800){
        track1.y=track1.height/2
    }
    
    if(coinGroup.isTouching(player)){
        Score=Score+1
        coinGroup.destroyEach()
    }
    spawncoins()

drawSprites()
text ("SCORE:"+Score,900,100)

}
function spawncoins(){
    if(frameCount%50===0){
        coin=createSprite(500,random(0,200),10,10)
    coin.addImage("coin",coinimg)
    coin.scale=0.5
    coin.lifetime=20
    coinGroup.add(coin)
    

    }
}