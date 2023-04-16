import { Component } from "@angular/core";
import { getMangasPerLevel } from "./data";
import { Screen } from "./screen";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  Screen = Screen;
  screen = Screen.Home;
  mangasPerLevel = getMangasPerLevel();

  goToScreen(newScreen: Screen) {
    this.screen = newScreen;
  }
}
