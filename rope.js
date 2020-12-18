class Rope {
    constructor(body1,body2,point1) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:point1,
        }
        this.slingshot = Matter.Constraint.create(options)
        World.add(world,this.slingshot)
    }
    display(){
        push()
        stroke(255,255,9)
        strokeWeight(3)
        var position1 = this.slingshot.bodyA.position
        var position2 = this.slingshot.bodyB.position
        var pointA = this.slingshot.pointB
        var anchor2x = position2.x+pointA.x
        var anchor2y = position2.y+pointA.y
        line(position1.x,position1.y,anchor2x,anchor2y)
        pop()
        }
    }
