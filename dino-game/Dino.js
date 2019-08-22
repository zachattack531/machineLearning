class Dino {
    constructor(playerControlled) {
        this.width = 30;
        this.height = 50;

        this.pos = createVector(width/4, height - height/ 4 - this.height / 2);
        this.vel = createVector();

        this.playerControlled = playerControlled;
    }

    calcGroundPos(){
        return(height-height/4-this.height/2);
    }    

    update(){]
        groundPos=this.calcGroundPos();
        this.vel.y += -0.25;
        this.pos.y -= this.vel.y;

        if(this.pos.y >= groundPos){
            this.pos.y = groundPos;
            this.vel.y = 0;
        
    }
    jump(){
        if this.pos.y == this.calcGroundPos(){
            this.vel.y = 7;
            
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