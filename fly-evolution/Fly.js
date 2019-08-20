class Fly {
    constructor(lifespan) {
        this.pos = createVector(width/2, height-40);
        this.acc = createVector();
        this.vel = createVector();
        this.dna = new DNA(lifespan);
    }

    update(count){
        this.applyForce(this.dna.genes[count]);
        this.vel.add(this.acc);
        this.pos.add(this.vel)
        this.acc.mult(0)

    }
    applyForce(force){
       this.acc.add(force); 
    }

    show(){
        push();
        noStroke();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        fill(0, 0, 0, 150);
        rectMode(CENTER);
        rect(0, 0, 25, 15);
        pop();
    }
}