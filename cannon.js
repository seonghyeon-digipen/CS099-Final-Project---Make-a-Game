// SeongHyeon Lee
// CS099 Final Project - Make a Game
// CS099
// Spring 2020.7.08
class Cannons {
constructor(){
this.x = 20
  this.y = height - 30
  this.width = 25
  this.length = 75
  this.angle = 0
}
  update(){
   if (turnLeft) {
    this.angle -= 0.03
  } else if (turnRight) {
    this.angle += 0.03
  }
  }
show(){
push();
  translate(this.x, this.y);
  rotate(this.angle);
  push()
  fill(CannonColor)
  rect(0, -this.width / 2, this.length, this.width);
  pop()
  push()
  fill('black')
  circle(0, 0, this.width);
  pop()
  pop();
}
}
