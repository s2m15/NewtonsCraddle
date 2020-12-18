class Bob {
    constructor(x,y,r) {
      var options = {
          restitution: 1,
          friction: 0,
          density: 0.8
      }
      this.body = Bodies.circle(x,y,r,options);
      this.radius = r
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      ellipseMode(CENTER);
      fill(255, 112, 59);
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop()
    }
  };