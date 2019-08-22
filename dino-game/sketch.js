let ground;
let dinos = [];
function setup() {
    createCanvas(640,480);
    ground = new Ground();
    firstGeneration();
}

function draw() {
    background(255);

    ground.show();

     
    for(let i = 0; i < dinos.length; i++){
        if(dinos[i].playerControlled){
            if(keyIsDown(DOWN_ARROW)){
                dinos[i].duck();
            }else{
                dinos[i].unDuck();
            }
        }
        dinos[i].update();
        dinos[i].show();
    }
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