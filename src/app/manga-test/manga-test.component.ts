import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { getMangasShuffled } from "../data";
import { Screen } from "../screen";

interface KnowledgeLevel {
  known: number;
  unknown: number;
}

@Component({
  selector: "manga-test",
  templateUrl: "./manga-test.component.html",
  styleUrls: ["./manga-test.component.scss"],
})
export class MangaTestComponent implements OnInit {
  @Output() screenChange = new EventEmitter<Screen>();

  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === "ArrowLeft") {
      this.mangaKnown();
    } else if (event.key === "ArrowRight") {
      this.mangaNotKnown();
    }
  }

  Math = Math;
  mangasShuffled = getMangasShuffled();
  currentMangaIndex = 0;
  knowledgeMap: { [key: number]: KnowledgeLevel } = {};
  testOver = false;
  results = { obtainedLevel: -1, maxLevel: -1 };

  ngOnInit(): void {
    this.resetTest();
  }

  resetTest() {
    this.mangasShuffled = getMangasShuffled();
    this.currentMangaIndex = 0;
    this.knowledgeMap = {};
    this.testOver = false;
    this.results = { obtainedLevel: -1, maxLevel: -1 };
    this.mangasShuffled
      .map((manga) => manga.level)
      .forEach((level) => {
        if (this.knowledgeMap[level] == null) {
          this.knowledgeMap[level] = { known: 0, unknown: 0 };
        }
      });
  }

  gotToHomeScreen() {
    this.screenChange.emit(Screen.Home);
  }

  gotToMangaList() {
    this.screenChange.emit(Screen.CardList);
  }

  currentManga() {
    return this.mangasShuffled[this.currentMangaIndex];
  }

  isCurrentManga(mangaId: number) {
    return this.currentManga().id === mangaId;
  }

  backOne() {
    if (this.currentMangaIndex > 0) {
      this.currentMangaIndex--;
    }
  }

  nextOne() {
    if (this.currentMangaIndex < this.mangasShuffled.length - 1) {
      this.currentMangaIndex++;
    } else {
      this.results = this.computeResults();
      this.testOver = true;
    }
  }

  mangaKnown() {
    this.knowledgeMap[this.currentManga().level].known++;
    this.nextOne();
  }

  mangaNotKnown() {
    this.knowledgeMap[this.currentManga().level]!.unknown++;
    this.nextOne();
  }

  listOfLevels() {
    return Object.keys(this.knowledgeMap)
      .map((level) => parseInt(level))
      .sort((a, b) => a - b);
  }

  computeResults() {
    const maxLevel = this.listOfLevels().pop()!;
    let obtainedLevel = 0;
    for (let checkLevel = 1; checkLevel <= maxLevel; checkLevel++) {
      const checkLevelData = this.knowledgeMap[checkLevel];
      if (checkLevelData != null) {
        if (checkLevelData.known >= checkLevelData.unknown) {
          obtainedLevel = checkLevel;
        } else {
          break;
        }
      }
    }
    return { obtainedLevel, maxLevel };
  }
}
