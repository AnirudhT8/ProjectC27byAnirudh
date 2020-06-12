class SlingShot{
    constructor(bodyA, pointB){
        var option1 = {
            bodyA: bodyA,
            pointB: pointB,
            length: 200
        }
        

        
        this.sling = Constraint.create(option1);
        World.add(world, this.sling);



 
    }
        display(){

        if(this.sling.bodyA){
            var bodyA = this.sling.bodyA.position;
            var pointB = this.sling.pointB.position;
        }
    }
    
}