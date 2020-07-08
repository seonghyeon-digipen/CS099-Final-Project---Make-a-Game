// SeongHyeon Lee
// CS099 Final Project - Make a Game
// CS099
// Spring 2020.7.08
class Bullet {
  constructor(x, y, Width, Angle, val) {
    this.x = x
    this.y = y
    this.radius = Width
    this.angle = Angle
    this.X_speed = 5
    this.Y_speed = 5
    this.gravity = val

  }
  show() {
    push()
    imageMode(CENTER)
    image(Cannon_Ball, this.x, this.y, 25, 25);
    pop()
  }
  update() {
    this.Y_speed += -this.gravity;
    this.x += cos(this.angle) * this.X_speed;
    this.y += sin(this.angle) * this.Y_speed;
  }

}