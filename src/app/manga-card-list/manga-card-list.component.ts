import { Component, OnInit } from "@angular/core";
import { MangaLevel, getMangasPerLevel } from "../data";

@Component({
  selector: "manga-card-list",
  templateUrl: "./manga-card-list.component.html",
  styleUrls: ["./manga-card-list.component.scss"],
})
export class MangaCardListComponent implements OnInit {
  mangasPerLevel: MangaLevel[] = [];

  ngOnInit(): void {
    this.mangasPerLevel = getMangasPerLevel();
  }
}
