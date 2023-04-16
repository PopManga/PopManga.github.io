import { Component } from "@angular/core";
import { Screen } from "./screen";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  Screen = Screen;
  screen = Screen.Home;

  goToScreen(newScreen: Screen) {
    this.screen = newScreen;
  }
}
