class BOB{
    constructor(x,y){
        var options = {
            'restitution':1,
            'friction':0,
            'density':50,
            
            
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.radius = 25;
        
        
        
        World.add(world, this.body);
      
      }
      display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
      }
    }