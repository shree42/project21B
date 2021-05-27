var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound("music.mp3")                }


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";
   // block1.debug=true;

    block2 = createSprite(285,580,200,30);
    block2.shapeColor = "orange";
   // block2.debug=true;


    block3 = createSprite(490,580,200,30);
    block3.shapeColor = "red";
   // block3.debug=true;

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "purple";
   // block4.debug=true;



    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    ball.velocityX=3;
    ball.velocityY=5;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) ){
        ball.shapeColor = "blue";
        music.play();
         ball.bounceOff(block1);
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.setVelocity(0,0);

        //write code to stop music
        music.stop();

       // ball.bounceOff(block2);
    }

    //write code to bounce off ball from the block3

    if(block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor = "red";
        //write code to set velocityX and velocityY of ball as 0
       // ball.setVelocity(0,0);

        //write code to stop music
        music.stop();
    }


    if(block4.isTouching(ball)){
        ball.shapeColor = "purple";
        //write code to set velocityX and velocityY of ball as 0
        ball.setVelocity(0,0);

        //write code to stop music
        music.stop();
    }







    //write code to bounce off ball from the block4

    drawSprites();
}



