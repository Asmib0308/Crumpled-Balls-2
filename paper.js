class Paper {
    constructor() {
        var options = {
            isStatic: false,
            'restitution': 0.2,
            'friction':0.3,
            'density':0.4
        }
        
        this.body = Bodies.circle(100,550,15,options);
        this.width = 60

        this.image = loadImage("sprites/paper.png")
        World.add(world, this.body);
        console.log(this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        fill ("white")
        image(this.image,0,0,60, 60);
        pop ()
    }       
};