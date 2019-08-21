const LIFE_SPAN = 600; 
const POP_SIZE = 500;
const REWARD_MULT = 1000000;
const PUNISH_DIV = 3;
const MUTATION_RATE = 0.1; 
let generation = 0
let count = 0;
let sucessRate = 0;


function setup() {
    createCanvas(640,480);
    population = new Population(LIFE_SPAN, POP_SIZE, REWARD_MULT, PUNISH_DIV);
}

function draw() {
    
    background(0, 0, 194);
    textSize(32);
    text("Generation: " + generation, 0, 50);
    
    text("Success Rate: "+sucessRate+"%", 10, 115);

    

    population.run(count);
    count++;
    averageFit = population.findAverageFitness();

    text("Average Fitness: " + averageFit, 10, 75);

    if(count == LIFE_SPAN){
        
        population.evaluate();
        let newFlies = population.generateNewPopulation(MUTATION_RATE);
        population = new Population(LIFE_SPAN, POP_SIZE, REWARD_MULT, PUNISH_DIV)
        successRate=population.successRate;
        count = 0;
        generation++;
    }
}