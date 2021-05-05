var garden, gardenImage;
var cat1, cat1Image;
var cat2, cat2Image;
var cat3, cat3Image;
var cat4, cat4Image;
var mouse1, mouse1Image;
var mouse2, mouse2Image;
var mouse3, mouse3Image;
var mouse4, mouse4Image;



function preload() {
    //load the images here
    Images/garden.png;
    gardenImage=loadImage("garden.png");
    cat1Image=loadimage("cat1.png");
    cat2Image=loadimage("cat2.png");
    cat3Image=loadimage("cat3.png");
    cat4Image=loadimage("cat4.png");
    mouse1Image=loadimage("mouse1.png");
    mouse2Image=loadimage("mouse2.png");
    mouse3Image=loadimage("mouse3.png");
    mouse4Image=loadimage("mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    


}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    background(gardenImage);
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keycode === left_arrow){
      cat.velocityX =-5;
      cat.addAnimation("catRunning", cat2Image);
      cat.changeAnimation("catRunning");
  }


}
