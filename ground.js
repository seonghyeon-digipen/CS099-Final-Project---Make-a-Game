// SeongHyeon Lee
// CS099 Final Project - Make a Game
// CS099
// Spring 2020.7.08
class Ground {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h

  }
  show() {
    push()
    imageMode(CENTER)
    fill('255')
    image(Tile,this.x, this.y, this.w, this.h)
    pop()
  }
}