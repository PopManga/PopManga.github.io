import { Component, Input } from "@angular/core";
import { Manga } from "../data";

@Component({
  selector: "manga-card[manga]",
  templateUrl: "./manga-card.component.html",
  styleUrls: ["./manga-card.component.scss"],
})
export class MangaCardComponent {
  @Input() manga?: Manga;
}
