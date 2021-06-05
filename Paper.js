var options={
    isStatic : false,
    restitution: 0.3,
    friction: 100,
    density: 1
}

class Paper {

constructor(x,y,radius){
    this.body = Bodies.circle(x,y,radius,{
        isStatic : false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.0
    })
    World.add(world,this.body);
   this.radius = radius;
   this.image = loadImage("paper.png")
}
display(){
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 70, 70);
        pop();

}

}