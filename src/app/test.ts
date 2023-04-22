import { Manga } from "./data";

export interface MangaWithKnowledge extends Manga {
  known: boolean;
}

export interface TestResults {
  obtainedLevel: number;
  maxLevel: number;
  levels: { [key: number]: { known: number; total: number } };
}

export function getListOfLevels(mangas: Manga[]) {
  return [...new Set(mangas.map((manga) => manga.level))].sort((a, b) => a - b);
}

export function computeTestResults(mangas: MangaWithKnowledge[]) {
  const newResults: TestResults = {
    obtainedLevel: 0,
    maxLevel: getListOfLevels(mangas).pop()!,
    levels: {},
  };
  for (let manga of mangas) {
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
