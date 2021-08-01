class Sewerman{
    constructor(x,y,width,height){
        var options ={
            isStatic:false,
            restitution:0.5
            }
            this.body = Bodies.rectangle(x,y,width,height,options);
            World.add(world,this.body);
            this.width = width;
            this.height = height;


    }
   move(){
        if(keyIsDown(UP_ARROW)){
            sewerman.body.position.y -= 5
            this.body.isStatic = true
            console .log('0'+this.body.isStatic)
            sewerman.body.position.x += 3
            if(keyIsDown(UP_ARROW)){
                this.body.isStatic = false
                console.log('1'+this.body.isStatic)
            }
          }
          
          camera.position.x = sewerman.body.position.x + 500
          camera.position.y = sewerman.body.position.y
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill('white')
        rect(pos.x,pos.y,this.width,this.height);
    }
   
}