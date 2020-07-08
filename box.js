class Box {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.Direction = false
  }
  show() {
    push()
    imageMode(CENTER)
    image(Wall, this.x, this.y, this.w, this.h)
    pop()
  }
  update() {
    if (this.y > height - 60) {
      this.Direction = true
    } else if (this.y <= 0) {
      this.Direction = false
    }
    if (this.y >= -10 && this.Direction == false) {
      this.y = this.y + 7
    } else if (this.Direction == true) {
      this.y = this.y - 7
    }
  }
}