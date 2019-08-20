class Wall {
    constructor(x,y,w,h) {
        this.pos = createVector(X,Y);
        this.w = w;
        this.h = h;
    }

    show(){
        push();
        noStroke();
        translate(this.pos.x, this.pos.y);
        rectMode(CENTER);
        rect(0,0,this.w, this.h);
        pop();
    }

    hitWall(flyX, flyY) {
        // Check if the flies position is within the bounds of the wall
        if (flyX > this.pos.x - this.w / 2 && flyX < this.pos.x + this.w / 2 && flyY > this.pos.y - this.h / 2 && flyY < this.pos.y + this.h / 2) {
            // If so we have hit the wall
            return true;
        } else {
            // Otherwise we haven't
            return false;
        }
    }
}