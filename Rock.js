class Rock{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
             }
             
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,this.r, options)
		this.image = loadImage("rock.png");
		World.add(world, this.body);
   }
	display(){		
        var rockpos =this.body.position;		

			push()
			translate(rockpos.x, rockpos.y);
			rectMode(CENTER)
			//strokeWeight(3);
			fill(255,255,255)
	
			imageMode(CENTER);
			image(this.image, 0,0,20,20)
			pop()
			
	}

}