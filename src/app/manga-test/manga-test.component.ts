import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { Manga, getMangasShuffled } from "../data";

interface MangaWithKnowledge extends Manga {
  known: boolean;
}

interface TestResults {
  obtainedLevel: number;
  maxLevel: number;
  levels: { [key: number]: { known: number; total: number } };
}

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
  testOver = false;
  results: TestResults = { obtainedLevel: -1, maxLevel: -1, levels: {} };

  ngOnInit(): void {
    this.resetTest();
  }

  resetTest() {
    this.mangasShuffled = getMangasShuffled() as MangaWithKnowledge[];
    this.currentMangaIndex = 0;
    this.testOver = false;
    this.results = { obtainedLevel: -1, maxLevel: -1, levels: {} };
    for (let manga of this.mangasShuffled) {
      manga.known = false;
    }
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
      this.results = this.computeResults();
      this.testOver = true;
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

  listOfLevels() {
    return [...new Set(this.mangasShuffled.map((manga) => manga.level))].sort(
      (a, b) => a - b
    );
  }

  computeResults() {
    const newResults: TestResults = {
      obtainedLevel: 0,
      maxLevel: this.listOfLevels().pop()!,
      levels: {},
    };
    for (let manga of this.mangasShuffled) {
      if (newResults.levels[manga.level] == null) {
        newResults.levels[manga.level] = { known: 0, total: 0 };
      }
      newResults.levels[manga.level].total++;
      if (manga.known) {
        newResults.levels[manga.level].known++;
      }
    }
    for (let checkLevel = 1; checkLevel <= newResults.maxLevel; checkLevel++) {
      const checkLevelData = newResults.levels[checkLevel];
      if (checkLevelData != null) {
        if (checkLevelData.known >= checkLevelData.total / 2) {
          newResults.obtainedLevel = checkLevel;
        } else {
          break;
        }
      }
    }
    return newResults;
  }
}
