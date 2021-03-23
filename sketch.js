var ship1,ship2;
var bgImage;
var gameState = "serve";
var score=0;
var score1=0;
var allAsteroids = [];
const number = 30;

function preload(){
 bgImage=loadImage("images/background.jpg");
 shipImage=loadImage("images/SC.png");
}

function setup(){
createCanvas(400,400);

    ship1=new Ship(100);
    ship2=new Ship(300);
    for (let i = 0; i < number; i++) {
        allAsteroids.push(new Asteroid());
    }
   
}

function draw(){
    background(bgImage);
    if (gameState === "serve") {
        stroke("black");
        textSize(25);
        text("Press Space to Serve",150,180);
      }

    if(ship1.y===20){
        resetship1();
    }

    if(ship2.y===20){
        resetship2();
    }

    ship1.display();
    ship2.display();

    text("score:" + score,100,390);
    text("score:" + score1,300,390);
    AsteroidsSpawn();
    if (keyDown("space") &&  gameState === "serve") {
       
        gameState = "play";
      
      }
    
  if (score === 5 || score1 === 5){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
   score= 0;
    score1 = 0;
  }

  if(keyDown("up")){
    
    ship1.y=ship1.y-5;
}
if(keyDown("down")){
    ship1.y=ship1.y+5;
}

if(keyDown("left")){
    ship1.x=ship1.x+10;
}
if(keyDown("right")){
    ship1.x=ship1.x-10;
}

if(keyDown("w")){
    ship2.y=ship2.y-10;
}

if(keyDown("s")){
    ship2.y=ship2.y+10;
}

if(keyDown("a")){
    ship2.x=ship2.x-10;
}

if(keyDown("d")){
    ship2.x=ship2.x+10;
}
if (ship1.isTouching(allAsteroids)){
    resetship1();
}
if(ship2.isTouching(allAsteroids)){
    resetship2();
}
}


function AsteroidsSpawn(){
    console.log("play");
    for (let i = 0; i < allAsteroids.length; i++) {
      allAsteroids[i].update();
        allAsteroids[i].display();
           
    }
    
   
  }
  

  function resetship1(){
    ship1.x=100;
        ship1.y=350;
        score++;
  }
function resetship2(){
    ship2.x=300;
    ship2.y=350;
    score1++;
  } 
 