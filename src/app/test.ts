import JsonURL from "@jsonurl/jsonurl";
import { Manga } from "./data";

export interface MangaWithKnowledge extends Manga {
  known: boolean;
}

export interface TestResults {
  obtainedLevel: number;
  maxLevel: number;
  levels: { [key: number]: { known: number; total: number } };
}

interface TestResultsForUrl {
  o: number;
  m: number;
  l: { [key: number]: { k: number; t: number } };
}

export function stringifyTestResultsForUrl(testResults: TestResults) {
  const testResultsForUrl: TestResultsForUrl = {
    o: testResults.obtainedLevel,
    m: testResults.maxLevel,
    l: Object.fromEntries(
      Object.entries(testResults.levels).map(([level, levelData]) => [
        parseInt(level),
        { k: levelData.known, t: levelData.total },
      ])
    ),
  };
  return JsonURL.stringify(testResultsForUrl, { AQF: true });
}

export function parseTestResultsFromUrl(testResultsFromUrl: string) {
  const testResultsForUrl = JsonURL.parse(testResultsFromUrl, {
    AQF: true,
  }) as TestResultsForUrl;
  const testResults: TestResults = {
    obtainedLevel: testResultsForUrl.o,
    maxLevel: testResultsForUrl.m,
    levels: Object.fromEntries(
      Object.entries(testResultsForUrl.l).map(([level, levelData]) => [
        parseInt(level),
        { known: levelData.k, total: levelData.t },
      ])
    ),
  };
  return testResults;
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
