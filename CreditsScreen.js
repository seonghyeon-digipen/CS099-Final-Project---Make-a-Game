// SeongHyeon Lee
// CS099 Final Project - Make a Game
// CS099
// Spring 2020.7.08
class CreditsScreen {
  constructor() {
    this.mainmenu = new Button(width / 2, height - 50, "Main Menu");
  }

  Update() {
    if (this.mainmenu.DidClickButton()) {
      console.log("Main Menu!");
      CurrentScene = MAIN_MENU;
    }
  }

  Draw() {
    DrawTitle("Credits");
    textAlign(CENTER)
    text("Made by Seonghyeon Lee \n  Rudy Castan", width / 2, height / 2);

    this.mainmenu.DrawButton();
  }
}