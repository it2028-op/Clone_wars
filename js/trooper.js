class Trooper {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 60;
      this.height = 80;
      this.speed = Cspeed + Cspeed/5;
    }
  
    detectCollision(droid) {
      return collideRectRect(
        this.x,
        this.y,
        this.width,
        this.height,
        droid.x,
        droid.y,
        droid.size,
        droid.size
      );
    }
    move() {
        if (keyIsDown(UP_ARROW)) {
          if (this.y > 0+Cborder) this.y -= this.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
          if (this.y < height - this.height - Cborder) this.y += this.speed;
        }
        if (keyIsDown(32)) {
          if (time % 20 == 0){
            blasts.push(new Blast(this.x + this.width/2, this.y + this.height/2));
          }
        }
      }
    
      draw() {
        this.move();
        rect(this.x, this.y, this.width, this.height);
      }
    }