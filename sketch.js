let CannonColor = 220;
let CurrentScene = MAIN_MENU;

let MainMenuScene;
let CreditsScene;
let OptionsScene;

let bullets = [];
let slider
var angle = 0;

let target1;

function setup() {
  createCanvas(1000, 600);
  MainMenuScene = new MainMenu();
  CreditsScene = new CreditsScreen();
  OptionsScene = new OptionsScreen();
  EndingScene = new EndingScreen();
  ClearScene = new ClearScreen();
  How_To_Play = new HowToPlay();
  game = new Part();
  cannon = new Cannons()
  ground = new Ground(width / 2, height - 10, width, 20);
  Target1 = new target(width - 40, height - 40, 40)
  Box1 = new Box(width - 240, height - 100, 40, 160)
  Box2 = new Box(width - 140, height / 2, 40, 80)
  Target2 = new target(width - 40, height / 4, 40)
  turnLeft = false
  turnRight = false
  Mm.loop()
}

function draw() {

  textSize(20);
  switch (CurrentScene) {
    case MAIN_MENU:
      background(BG1)
      MainMenuScene.Update();
      MainMenuScene.Draw();
      break;
    case CREDITS_SCREEN:
      background(BG3)
      CreditsScene.Update();
      CreditsScene.Draw();
      break;
    case OPTIONS_SCREEN:
      background(BG3)
      OptionsScene.Update();
      OptionsScene.Draw();
      break;
    case PART_SCREEN:
      background(BG2)
      game.Update()
      game.Draw()
      break;
    case PART1_SCREEN:
      background(BG)
      Power();
      ground.show();
      cannon.show();
      cannon.update();
      hit()
      Target1.show();
      Box1.show();
      GameSet()
      break;
    case PART2_SCREEN:
      background(BG)
      Power();
      ground.show();
      cannon.show();
      cannon.update();
      hit2()
      Target2.show();
      Target2.update();
      GameSet()
      break;
    case PART3_SCREEN:
      background(BG)
      Power();
      ground.show();
      cannon.show();
      cannon.update();
      hit2()
      Target2.show();
      Target2.update();
      Box2.show();
      Box2.update();
      GameSet()
      break;
    case Ending_SCREEN:
      background(BG)
      EndingScene.Update()
      EndingScene.Draw()
      gameSet = 7;
      gun = 7;
      k = 0;
      val = 0.115;
      power1 = 0.1;
      power2 = 100;
      break;
    case Clear_SCREEN:
      background(BG)
      ClearScene.Update()
      ClearScene.Draw()
      gameSet = 7;
      gun = 7;
      k = 0;
      val = 0.115;
      power1 = 0.1;
      power2 = 100;
      break;
    case HowToPlaySCREEN:
      How_To_Play.Update()
      How_To_Play.Draw()
      break;
  }
}