class MainMenu {
  constructor() {
    const center_x = width / 2;
    this.play = new Button(center_x, height * 3 / 7, "Play");
    this.options = new Button(center_x, height * 4 / 7, "Options");
    this.credits = new Button(center_x, height * 5 / 7, "Credits");
    this.HTP = new Button(center_x, height * 6 / 7, "How To Play");
  }

  Update() {
    if (this.play.DidClickButton()) {
      CurrentScene = PART_SCREEN;
    } else if (this.options.DidClickButton()) {
      console.log("Options!");
      CurrentScene = OPTIONS_SCREEN;
    } else if (this.credits.DidClickButton()) {
      console.log("Credits!");
      CurrentScene = CREDITS_SCREEN;
    } else if (this.HTP.DidClickButton()) {
      console.log("How To Play!");
      CurrentScene = HowToPlaySCREEN;
    }
  }

  Draw() {
    DrawTitle("Target Shooting");
    this.play.DrawButton();
    this.options.DrawButton();
    this.credits.DrawButton();
    this.HTP.DrawButton();
  }
}