class rope {
 constructor(bodyA,bodyB){
  var options = {
   bodyA:bodyA,
   bodyB:bodyB,
   stiffness:0.04,
   length:10
}
this.chain = Constrant.create(options);
World.add(world,this.chain);
}
display(){
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyA.position;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}