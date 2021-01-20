class Box{
  constructor(x,y){
    var option = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
          
    }
    this.body = Bodies.rectangle(x,y,80,80,option)
    World.add(world,this.body)
  }
  display(){
    push()
    rectMode(CENTER)
    fill("yellow")
    rect(this.body.position.x,this.body.position.y,80,80)
    pop()
  }

};
