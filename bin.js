/*class Bin extends baseClass {
    constructor(x, y, width, height) {
      super(x,y,width,height)
     this.image=loadImage("sprites/dustbingreen.png") 
    }
    
  }*/

  class Bin {
    constructor(x, y) {
      this.x=x;
      this.y=y;
      this.dustbinWidth=200;
		  this.dustbinHeight=213;
		  this.wallThickness=20;
      this.image=loadImage("dustbingreen.png") 
      this.sidewall1= Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
      this.sidewall2= Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
      this.bottomwall= Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})

      World.add(world, this.bottomwall)
      World.add(world, this.sidewall1)
      World.add(world, this.sidewall2)
    }

    display(){
      var posBottom=this.bottomwall.position;
			var posLeft=this.sidewall1.position;
			var posRight=this.sidewall2.position;
      
      rectMode(CENTER)
      rect(posLeft.x, posLeft.y, this.wallThickness, this.dustbinHeight )
      rect(posRight.x, posRight.y, this.wallThickness, this.dustbinHeight)
      rect(posBottom.x, posBottom.y, this.dustbinWidth+10, 20)

      imageMode(CENTER)
      image(this.image, this.x, this.y-100, this.dustbinWidth+38, this. dustbinHeight+15 )
    }
    
  }