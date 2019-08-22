let ground;
let dinos = [];
let cacti = [];

let spawnCactusFrame;

let counter = 0;

let score = 0;
let highScore = 0;

function setup() {
    tf.setBackend('cpu');
    createCanvas(640,480);

    ground = new Ground();

    spawnCactusFrame = 40; 
    cacti.push(new Cactus());
    firstGeneration();

}

function draw() {
    background(255);

    counter += 0.25;
    if (score > highScore){
        highScore = score;
    }
    score = int(counter)
    push();
    fill(0);
    textSize(30);
    text(score, width-150,30);
    text("HI " + highScore, width-175, 55);
    pop();

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
    let allDead = true; 
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
        if(dinos[i].isAlive){
            allDead = false;
            dinos[i].update(getClosestCactus(dinos[i]));
            dinos[i].show();
        }
    }
    if (allDead){
        nextGeneration();
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
    dinos.push(new Dino(false, new NeuralNetwork(2, 4, 3)));
}
function nextGeneration(){
    dinos = [];
    dinos.push(new Dino(false, new NeuralNetwork(2, 4, 3)));

    spawnCactusFrame = frameCount+40;
    cacti= [];
    cacti.push(new Cactus());

    counter=0
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