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
  const levels = {} as TestResultsForUrl["l"];
  for (let level in testResults.levels) {
    levels[parseInt(level)] = {
      k: testResults.levels[parseInt(level)].known,
      t: testResults.levels[parseInt(level)].total,
    };
  }
  const testResultsForUrl: TestResultsForUrl = {
    o: testResults.obtainedLevel,
    m: testResults.maxLevel,
    l: levels,
  };
  return JsonURL.stringify(testResultsForUrl, { AQF: true });
}

export function parseTestResultsFromUrl(testResultsFromUrl: string) {
  const testResultsForUrl = JsonURL.parse(testResultsFromUrl, {
    AQF: true,
  }) as TestResultsForUrl;
  const levels = {} as TestResults["levels"];
  for (let level in testResultsForUrl.l) {
    levels[parseInt(level)] = {
      known: testResultsForUrl.l[parseInt(level)].k,
      total: testResultsForUrl.l[parseInt(level)].t,
    };
  }
  const testResults: TestResults = {
    obtainedLevel: testResultsForUrl.o,
    maxLevel: testResultsForUrl.m,
    levels: levels,
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
