import { Component, Input } from "@angular/core";
import { Manga } from "../data";

@Component({
  selector: "manga[manga]",
  templateUrl: "./manga.component.html",
  styleUrls: ["./manga.component.scss"],
})
export class MangaComponent {
  @Input() manga?: Manga;
}
