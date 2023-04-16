import { Component, EventEmitter, Output } from "@angular/core";
import { getMangasPerLevel } from "../data";
import { Screen } from "../screen";

@Component({
  selector: "manga-card-list",
  templateUrl: "./manga-card-list.component.html",
  styleUrls: ["./manga-card-list.component.scss"],
})
export class MangaCardListComponent {
  @Output() screenChange = new EventEmitter<Screen>();

  mangasPerLevel = getMangasPerLevel();

  gotToHomeScreen() {
    this.screenChange.emit(Screen.Home);
  }
}
