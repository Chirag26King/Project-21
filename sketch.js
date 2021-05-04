var canvas;
var music;

var box;
var block1,block2,block3,block4;
var edges;


function preload(){
    music = loadSound("music.mp3");



}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces

    block1=createSprite(80,570,150,30);
    block1.shapeColor="blue";

    block2=createSprite(250,570,150,30);
    block2.shapeColor="orange";

    block3=createSprite(420,570,150,30);
    block3.shapeColor="purple";


    block4=createSprite(590,570,150,30);
    block4.shapeColor="green";
    //create box sprite and give velocity


    box=createSprite(random(20,650),50,20,20);
    box.shapeColor="white";
    box.velocityX=4;
    box.velocityY=7;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


    edges=createEdgeSprites();


    box.bounceOff(edges);

    if(box.isTouching(block1)){

        box.shapeColor="blue";
        box.bounceOff(block1);
    }

    if(box.isTouching(block2)){

        box.shapeColor="orange";
        box.setVelocity(0,0);
        music.stop();
    }

    if(box.isTouching(block3)){

        box.shapeColor="purple";
        box.bounceOff(block3);
        music.play();
    }

    if(box.isTouching(block4)){

        

            box.shapeColor="green";
            box.bounceOff(block4);
        }
    

drawSprites();
    //add condition to check if box touching surface and make it box
}
