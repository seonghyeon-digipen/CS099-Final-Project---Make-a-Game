// SeongHyeon Lee
// CS099 Final Project - Make a Game
// CS099
// Spring 2020.7.08
class Part{
    constructor(){
        const center_x = width / 2;
        this.part1 = new Button(center_x, height * 2/5, "part1");
        this.part2 = new Button(center_x, height * 3/5, "part2");
        this.part3 = new Button(center_x, height * 4/5, "part3");
    }

    Update(){
        if(this.part1.DidClickButton()){
          console.log("part1!");
           CurrentScene = PART1_SCREEN;
        } else if(this.part2.DidClickButton())
        {
            console.log("part2!");
            CurrentScene = PART2_SCREEN;
        } else if(this.part3.DidClickButton()){
            console.log("part3!");
            CurrentScene = PART3_SCREEN;
        }
    }

    Draw(){
        DrawTitle("Part");
        this.part1.DrawButton();
        this.part2.DrawButton();
        this.part3.DrawButton();
    }
}