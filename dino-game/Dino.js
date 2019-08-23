class Dino {
    constructor(playerControlled, brain) {
        this.originalWidth = 30;
        this.originalHeight = 50;
        this.height = this.originalHeight;
        this.width = this.originalWidth;

        this.pos = createVector(width/4, height - height/ 4 - this.height / 2);
        this.vel = createVector();

        this.playerControlled = playerControlled;

        this.isAlive = true;

        this.brain = brain;

        this.score = 0;
    }

    calcGroundPos(){
        return(height-height/4-this.height/2);
    }    

    update(closestCactus){

        this.score = score;
        let groundPos = this.calcGroundPos();
        this.vel.y -= 0.25;
        this.pos.y -= this.vel.y;
        
        if(this.pos.y >= groundPos){
            this.pos.y = groundPos;
            this.vel.y = 0;
            
        }

        if(this.hitCactus(closestCactus)){
            this.isAlive = false;
        }
        if(!this.playerControlled){
            this.think(closestCactus);
        }
        
    }

    think(cactus){
        
        let distance =cactus.pos.x - cactus.width/2 - this.pos.x+ this.width/2;
        if(distance <= 0){
            distance = 0;
        }
        let actions = this.brain.predict([distance, cactus.count]);
        let choice = actions.indexOf(Math.max(...actions));
        if (choice == 0){
            //Jump
            this.unDuck();
            this.jump();
        }else if (choice == 1){
            //Duck
            this.duck();
        }else{
            //Do nothing
            this.unDuck();
        }
    }
    
    jump(){
        if (this.pos.y == this.calcGroundPos()&&this.height > this.originalWidth){
            this.vel.y += 8;

        }
    }
    duck(){
        if (this.pos.y == this.calcGroundPos()){
            this.height = this.originalWidth;
            this.width = this.originalHeight;
        }
    }
    unDuck(){
        if (this.pos.y == this.calcGroundPos()){
            this.height = this.originalHeight;
            this.width = this.originalWidth;
        }
    }
    show(){
        push();
        noStroke();
        translate(this.pos.x, this.pos.y);
        if (this.playerControlled){
            fill(0,0,100,100);
        }else{
            fill(0,100,0,100);
        }
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

    hitCactus(cactus) {
        let cactusWidth = ((cactus.width + cactus.spacing) * cactus.count) - cactus.spacing; // Calculate Full Width of Cactus

        if (this.pos.x + this.width / 2 > cactus.pos.x - cactus.width / 2 && this.pos.x - this.width / 2 < cactus.pos.x + cactusWidth) { // Check X
            if (this.pos.y + this.height / 2 > cactus.pos.y - cactus.height / 2) {
                return true;
            }
        }
        return false;
    }

}