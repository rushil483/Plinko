class Divisions{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);

         //for (var k = 0; k<=this.width; k = k + 80){
            // divisions.push(new divisions(k, height-divisionHeight/2, 10,divisionHeight));
             
         //}
    }
}