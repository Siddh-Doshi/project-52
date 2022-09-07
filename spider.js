class spider{
    constructor(x,y,w,h){
        var options = {
            mass:6
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.image=this.img
     World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        traslate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTRE)
        image(this.image,0,0,this.w,this.h)
        pop()


    }