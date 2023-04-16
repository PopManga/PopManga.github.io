import { Component } from "@angular/core";
import { getMangasPerLevel } from "./data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  mangasPerLevel = getMangasPerLevel();
}
