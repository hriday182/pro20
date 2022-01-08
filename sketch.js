var bg, sleep, gym, brush, eat, drink, move, bath;
var astronaut;
function preload(){
bg=loadImage("iss.png");
sleep=loadAnimation("sleep.png");
gym=loadAnimation("gym1.png","gym2.png");
brush=loadAnimation("brush.png");
eat=loadAnimation("eat1.png","eat2.png");
drink=loadAnimation("drink1.png","drink2.png");
move=loadAnimation("move.png","move1.png");
bath=loadAnimation("bath1.png","bath2.png");

}
function setup() {
  createCanvas(800,400);
  astronaut=createSprite(400, 200, 50, 50);
  astronaut.addAnimation('sleeping',sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bg);  
  if(keyDown('UP_ARROW')){
astronaut.addAnimation('brushing', brush);
astronaut.changeAnimation('brushing');
astronaut.scale=0.1;
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;


  }

  if(keyDown('DOWN_ARROW')){
    astronaut.addAnimation('gymming', gym);
    astronaut.changeAnimation('gymming');
    astronaut.scale=0.1;
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    
    
      }

      if(keyDown('LEFT_ARROW')){
        astronaut.addAnimation('eating', eat);
        astronaut.changeAnimation('eating');
        astronaut.scale=0.1;
        astronaut.y=350;
        astronaut.velocityX=0;
        astronaut.velocityY=0;
        
        
          }


          if(keyDown('RIGHT_ARROW')){
            astronaut.addAnimation('bathing', bath);
            astronaut.changeAnimation('bathing');
            astronaut.scale=0.1;
            astronaut.y=350;
            astronaut.velocityX=0;
            astronaut.velocityY=0;
            
            
              }


              if(keyDown('M')){
                astronaut.addAnimation('moving', move);
                astronaut.changeAnimation('moving');
                astronaut.scale=0.1;
                astronaut.y=350;
                astronaut.velocityX=2;
                astronaut.velocityY=2;
                
                
                  }
  drawSprites();
}