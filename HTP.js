// SeongHyeon Lee
// CS099 Final Project - Make a Game
// CS099
// Spring 2020.7.08
class HowToPlay {
  constructor() {
    this.mainmenu = new Button(width / 2+50, height - 50, "Main Menu");
  }

  Update() {
    if (this.mainmenu.DidClickButton()) {
      console.log("Main Menu!");
      CurrentScene = MAIN_MENU;
    }
  }

  Draw() {
    DrawTitle("How To Play");
    push()
   imageMode(CENTER)
image(Htp,width/2,height/2,width,height);
    pop()
    this.mainmenu.DrawButton();
  }
}