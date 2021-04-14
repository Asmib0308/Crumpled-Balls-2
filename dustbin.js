class Dustbin{
    constructor(x,y,width,height){
        var option = {
            isStatic: true,
            restitution: 0.5,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.width =width;
        this.height = height;
        console.log(this.body)
    }
    display(){
        push()
        rectMode(CENTER);
        var pos = this.body.position;
        stroke(128, 128, 128)
        fill(128, 128, 128)
        rect(pos.x,pos.y,this.width,this.height);
        pop()
    }
}