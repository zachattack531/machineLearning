class Dino {
    constructor(playerControlled) {
        this.width = 30;
        this.height = 50;
        this.pos = createVector(width/4, height - height/ 4 - this.height / 2);
        this.vel = createVector();

        this.playerControlled = playerControlled;
    }

    show(){
        push();
        noStroke();
        translate(this.pos.x, this.pos.y);
        if (this.playerControlled){
            fill(0,0,100,100);
        }else{
            fill(0,100,0,100)
        }
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