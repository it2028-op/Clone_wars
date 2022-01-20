class Droid {
    constructor() {
      this.size = Csize;
      this.x = width +100;
      this.y = random(this.size + Cborder, height - this.size - Cborder);
      this.speed = Cspeed/5;
    }
  
    detectCollision(blast) {
      return collideRectCircle(
        this.x,
        this.y,
        this.size,
        this.size,
        blast.x,
        blast.y,
        blast.size
      );
    }
  
    move() {
      this.x -= this.speed;
    }
  
    draw() {
      this.move();
      rect(this.x, this.y, this.size - this.size/4, this.size);
    }
  }