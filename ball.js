class ball{
    constructor(x,y,r){
        var options = {
            restitution=0.4
        }
        this.body=Bodies.rectangle(x,y,r,r,options)
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("basketball.jpeg")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        traslate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTRE)
        image(this.image,0,0,this.r,this.r)
        pop()


    }

    
}