var options={
    isStatic : true,
  
}

class Dustbin {

constructor(x,y,w,h){
    this.body = Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body);
    this.width = w;
    this.height = h;
    this.image = loadImage("dustbingreen.png");
    
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    stroke('white');
    rectMode(CENTER);
    rect( 0, 0, this.width, this.height);
    pop();

}

}