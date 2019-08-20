const LIFE_SPAN = 600; 
const POP_SIZE = 500;
const REWARD_MULT = 10;
const PUNISH_DIV = 3;
const MUTATION_RATE = 0.1; 

let count = 0;

let fly;

function setup() {
    createCanvas(640,480);

    fly = new Fly(LIFE_SPAN);
    food = new Food(width/2,50,30);
    wall = new Wall(width/2, height - height/3, 300, 30);
}

function draw() {
    
    background(0, 0, 194);
    fly.update(count);
    wall.show();
    fly.show();
    food.show()
    count++;
    
    if(count == LIFE_SPAN){
        count = 0;
    }
}