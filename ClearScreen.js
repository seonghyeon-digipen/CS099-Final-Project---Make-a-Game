// SeongHyeon Lee
// CS099 Final Project - Make a Game
// CS099
// Spring 2020.7.08
class ClearScreen{

  constructor(){
        const center_x = width/2;
       this.mainmenu = new Button(center_x, height - 50, "Main Menu");
    }

    Update(){
         if(this.mainmenu.DidClickButton()){
            CurrentScene = MAIN_MENU;
       }
    }

    Draw(){
        DrawTitle("Clear");
        this.mainmenu.DrawButton();
    }
}