class Mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:0.1,
			density:1.0
             }
             
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,this.r, options)
		this.image = loadImage("mango.png");
		World.add(world, this.body);
   }
	display(){		
        var mangopos =this.body.position;		

			push()
			translate(mangopos.x, mangopos.y);
			rectMode(CENTER)
			fill(255,255,255)
	
			imageMode(CENTER);
			image(this.image, 0,0,40,40);
			pop()
			
	}

}