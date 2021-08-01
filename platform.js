class Platform{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
            }
            this.body = createSprite(x,y,width,height)
            World.add(world,this.body);
            this.width = width;
            this.height = height;


    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill('brown')
        rect(pos.x,pos.y,this.width,this.height);
    }
   
}