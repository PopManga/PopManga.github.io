import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Manga } from "../data";
import { Screen } from "../screen";

@Component({
  selector: "manga-card[manga]",
  templateUrl: "./manga-card.component.html",
  styleUrls: ["./manga-card.component.scss"],
})
export class MangaCardComponent {
  @Input() manga?: Manga;
  @Output() screenChange = new EventEmitter<Screen>();

  gotToHomeScreen() {
    this.screenChange.emit(Screen.Home);
  }
}
