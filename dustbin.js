class bin{
    constructor(x,y,width,height){
        var options={
isStatic:true,
restitution:0.3,
friction:0.5,
density:1.2

        }
        this.body=Bodies.rectangle(x,y,width,height,options);

        this.width=width
        this.height = height
     
        World.add(world,this.body);
       this.image=loadImage("sprites//dustbingreen.png")
    }
    display(){
        var pos = this.body.position;
        console.log(pos);
imageMode(CENTER)
   fill("red");
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}