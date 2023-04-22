import { Component, HostListener, OnInit } from "@angular/core";
import { getMangasShuffled } from "../data";
import { MangaWithKnowledge, computeTestResults } from "../test";
import { Router } from "@angular/router";
import JsonURL from "@jsonurl/jsonurl";

@Component({
  selector: "manga-test",
  templateUrl: "./manga-test.component.html",
  styleUrls: ["./manga-test.component.scss"],
})
export class MangaTestComponent implements OnInit {
  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      this.mangaKnown();
    } else if (event.key === "ArrowRight") {
      this.mangaNotKnown();
    } else if (event.key === "ArrowUp") {
      this.backOne();
    }
  }

  Math = Math;
  mangasShuffled: MangaWithKnowledge[] = [];
  currentMangaIndex = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mangasShuffled = getMangasShuffled().map((m) => ({
      ...m,
      known: false,
    }));
    this.currentMangaIndex = 0;
  }

  currentManga() {
    return this.mangasShuffled[this.currentMangaIndex];
  }

  isCurrentManga(mangaId: number) {
    return this.currentManga().id === mangaId;
  }

  nextOne() {
    if (this.currentMangaIndex < this.mangasShuffled.length - 1) {
      this.currentMangaIndex++;
    } else {
      const results = computeTestResults(this.mangasShuffled);
      this.router.navigate(["/test/resultats"], {
        queryParams: { donnees: JsonURL.stringify(results, { AQF: true }) },
      });
    }
  }

  backOne() {
    if (this.currentMangaIndex > 0) {
      this.currentMangaIndex--;
      this.currentManga().known = false;
    }
  }

  mangaKnown() {
    this.currentManga().known = true;
    this.nextOne();
  }

  mangaNotKnown() {
    this.currentManga().known = false;
    this.nextOne();
  }
}
