
class OptionsScreen {
  constructor() {
    const center_x = width / 2;
    this.background = new Button(center_x, height / 2, "Random Color");
    this.mainmenu = new Button(center_x, height - 50, "Main Menu");
  }

  Update() {
    if (this.background.DidClickButton()) {
      CannonColor = color(random(255), random(255), random(255));
    } else if (this.mainmenu.DidClickButton()) {
      CurrentScene = MAIN_MENU;
    }
  }

  Draw() {
    DrawTitle("Options");
    push()
    translate(width / 2, height / 2 + 100)
    push()
    fill(CannonColor)
    rect(0, -25 / 2, 75, 25);
    pop()
    push()
    fill('black')
    circle(0, 0, 25);
    pop()
    pop()

    this.background.DrawButton();
    this.mainmenu.DrawButton();
  }
}