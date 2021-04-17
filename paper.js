class Paper {
    constructor() {
        var options = {
            isStatic: false,
            'restitution': 0.2,
            'friction':0.3,
            'density':0.4
        }
        
        this.body = Bodies.circle(100,520,15,options);
        this.width = 50

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
        image(this.image,0,0,50, 50);
        pop ()
    }       
};