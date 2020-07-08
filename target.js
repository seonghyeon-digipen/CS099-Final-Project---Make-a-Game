class target {
constructor(x,y,z){
this.x = x
  this.y = y
  this.radius = z
  this.Direction=false
}
  show(){
    var moving = random(-1,1);
    
  circle(this.x,this.y,this.radius)
    circle(this.x - 10,this.y - 5,this.radius/3)
    circle(this.x + 10,this.y - 5,this.radius/3)
    push()
    fill('black');
    circle(this.x - 10 + moving,this.y - 5 + moving,this.radius/9)
    circle(this.x + 10 + moving,this.y - 5 + moving,this.radius/9)
   pop()
  }
  update(){
    
    if(this.y>height/4*3){
		this.Direction=true
    }else if(this.y<= height/4){
		this.Direction=false
    }
    if (this.y>=0 && this.Direction == false){
		this.y=this.y+5
    }else if( this.Direction == true){
		this.y=this.y-5
    }
  }
}