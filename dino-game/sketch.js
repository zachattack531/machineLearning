let ground;
let dinos = [];
let cacti = [];

let spawnCactusFrame;
function setup() {
    createCanvas(640,480);
    ground = new Ground();

    spawnCactusFrame = 40; 
    cacti.push(new Cactus());
    firstGeneration();

}

function draw() {
    background(255);

    ground.show();

    if(frameCount == spawnCactusFrame){
        cacti.push(new Cactus());
        spawnCactusFrame += int(random(40,100));
    }
    for (let i = 0; i < cacti.length; i++){
        cacti[i].update();
        cacti[i].show();
    
        if(cacti[i].pos.x < -cacti[i].width){
            cacti.shift
        }
    }
    for(let i = 0; i < dinos.length; i++){
        if(dinos[i].playerControlled){
            if(keyIsDown(DOWN_ARROW)){
                dinos[i].duck();
            }else{
                dinos[i].unDuck();
            }

            if(keyIsDown(UP_ARROW)){
                dinos[i].jump();
            }
        }
        dinos[i].update(getClosestCactus(dinos[i]));
        dinos[i].show();
    }
}

function getClosestCactus(dino){
    let closestIndex = 0;

    while(cacti[closestIndex].pos.x+cacti[closestIndex].fullWidth/2<dino.pos.x - dino.width){
        closestIndex++;
    }
    return cacti[closestIndex];
}
function firstGeneration(){ 
    dinos = [];
    dinos.push(new Dino(true));
}
function nextGeneration(){
    dinos = [];
    dinos.push(new Dino(true));
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        for(let i=0; i < dinos.length; i++){
            if(dinos[i].playerControlled){
                dinos[i].jump();
            }
        }
    }
}