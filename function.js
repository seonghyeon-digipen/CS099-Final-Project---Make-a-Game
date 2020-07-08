// SeongHyeon Lee
// CS099 Final Project - Make a Game
// CS099
// Spring 2020.7.08
let val = 0.115;
let power1 = 0.1;
let power2 = 100;
let shot = false;
let gun = 7;

function keyReleased() {
  if (keyCode == 37) {
    turnLeft = false;
  }

  if (keyCode == 39) {
    turnRight = false;
  }

  if (keyCode === 32 && gun > 0) {
    bullets.push(new Bullet(cannon.x, cannon.y, cannon.width, cannon.angle, val))
    gun -= 1;
    val = 0.115;
    power1 = 0.1;
    power2 = 100;
    bang.play()
  } else return;
}

function keyPressed() {
  if (keyCode == 37) {
    turnLeft = true;
  }

  if (keyCode == 39) {
    turnRight = true;
  }
  if (keyCode == 32) {
    shot = true;
  } else return;
}


function hit() {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].update();
    if (dist(bullets[i].x, bullets[i].y, Target1.x, Target1.y) <= 32.5) {
      console.log("hit!")
      wow.play()
      bullets.splice(i)
      CurrentScene = Clear_SCREEN;
    } else if (bullets[i].y > height - 20 || bullets[i].x > width || bullets[i].y < 0) {
      bullets.splice(i, 1)
      gameSet -= 1;
    } else if (Box1.x - 20 < bullets[i].x && bullets[i].x < Box1.x + 20 && Box1.y - 80 < bullets[i].y && bullets[i].y < Box1.y + 80) {
      bullets.splice(i, 1)
      gameSet -= 1;
    } else if (Box1.x - 20 < bullets[i].x && bullets[i].x < Box1.x + 20 && Box1.y - 80 <= bullets[i].y && bullets[i].y < Box1.y + 80) {
      bullets.splice(i, 1)
      gameSet -= 1;
    }
  }
}

function hit2() {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].update();
    if (bullets[i].y > height - 20 || bullets[i].x > width || bullets[i].y < 0) {
      bullets.splice(i, 1)
      gameSet -= 1;
    } else if (dist(bullets[i].x, bullets[i].y, Target2.x, Target2.y) <= 32.5) {
      console.log("hit!")
      wow.play()
      bullets.splice(i)
      CurrentScene = Clear_SCREEN;
    } else if (Box2.x - 30 <= bullets[i].x && bullets[i].x <= Box2.x + 20 && Box2.y - 40 <= bullets[i].y && bullets[i].y <= Box2.y + 40) {
      bullets.splice(i, 1)
      gameSet -= 1;
    }
  }
}

function Power() {
  push()
  fill('red');
  rect(10, height - 140, power1 * 1000, 20);
  pop()

  if (keyIsDown(32)) {
    if (0 < power2 && power2 <= 100) {
      power2 -= 1;
      val -= 0.001;
      power1 -= 0.001;
    }
    if (power2 <= 0) {
      power2 += 1;
      val += 0.001;
      power1 += 0.001;
    }
  }
}
let k = 0;
let left_bullet = [1, 2, 3, 4, 5, 6, 7]
let gameSet = 7;

function Left_bullets() {
  for (var i = 0; i < left_bullet.length; i++) {
    var x = 20 + i * 30
    image(Cannon_Ball, x, 20, 25, 25);
    if (shot === true) {
      k += 1;
      shot = false
    }
  }
}

function GameSet() {
  Left_bullets()
  if (gameSet == 0) {
    CurrentScene = Ending_SCREEN;
  }
  switch (k) {
    case 1:
      push()
      image(Cannon_Ball2, 20, 20, 25, 25);
      pop()
      break
    case 2:
      push()
      image(Cannon_Ball2, 20, 20, 25, 25);
      image(Cannon_Ball2, 50, 20, 25, 25);
      pop()
      break;
    case 3:
      push()
      image(Cannon_Ball2, 20, 20, 25, 25);
      image(Cannon_Ball2, 50, 20, 25, 25);
      image(Cannon_Ball2, 80, 20, 25, 25);
      pop()
      break;
    case 4:
      push()
      image(Cannon_Ball2, 20, 20, 25, 25);
      image(Cannon_Ball2, 50, 20, 25, 25);
      image(Cannon_Ball2, 80, 20, 25, 25);
      image(Cannon_Ball2, 110, 20, 25, 25);
      pop()
      break;
    case 5:
      push()
      image(Cannon_Ball2, 20, 20, 25, 25);
      image(Cannon_Ball2, 50, 20, 25, 25);
      image(Cannon_Ball2, 80, 20, 25, 25);
      image(Cannon_Ball2, 110, 20, 25, 25);
      image(Cannon_Ball2, 140, 20, 25, 25);
      pop()
      break;
    case 6:
      push()
      image(Cannon_Ball2, 20, 20, 25, 25);
      image(Cannon_Ball2, 50, 20, 25, 25);
      image(Cannon_Ball2, 80, 20, 25, 25);
      image(Cannon_Ball2, 110, 20, 25, 25);
      image(Cannon_Ball2, 140, 20, 25, 25);
      image(Cannon_Ball2, 170, 20, 25, 25);
      pop()
      break;
    case 7:
      push()
      image(Cannon_Ball2, 20, 20, 25, 25);
      image(Cannon_Ball2, 50, 20, 25, 25);
      image(Cannon_Ball2, 80, 20, 25, 25);
      image(Cannon_Ball2, 110, 20, 25, 25);
      image(Cannon_Ball2, 140, 20, 25, 25);
      image(Cannon_Ball2, 170, 20, 25, 25);
      image(Cannon_Ball2, 200, 20, 25, 25);
      pop()
      break;

  }

}