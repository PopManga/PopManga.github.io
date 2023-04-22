import { Component, OnInit } from "@angular/core";
import { getMangas } from "../data";
import { TestResults, getListOfLevels, parseTestResultsFromUrl } from "../test";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "manga-test-result",
  templateUrl: "./manga-test-result.component.html",
  styleUrls: ["./manga-test-result.component.scss"],
})
export class MangaTestResultComponent implements OnInit {
  results: TestResults | undefined;
  listOfLevels: number[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.listOfLevels = getListOfLevels(getMangas());
    this.route.queryParams.subscribe((params) => {
      this.results = parseTestResultsFromUrl(params["donnees"]);
    });
  }
}
