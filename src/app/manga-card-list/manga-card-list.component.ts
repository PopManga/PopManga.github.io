import { Component, EventEmitter, Output } from "@angular/core";
import { getMangasPerLevel } from "../data";

@Component({
  selector: "manga-card-list",
  templateUrl: "./manga-card-list.component.html",
  styleUrls: ["./manga-card-list.component.scss"],
})
export class MangaCardListComponent {
  mangasPerLevel = getMangasPerLevel();
}
