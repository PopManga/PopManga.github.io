import { Component, OnInit } from "@angular/core";
import { getMangas } from "../data";
import { TestResults, getListOfLevels } from "../test";
import { ActivatedRoute } from "@angular/router";
import JsonURL from "@jsonurl/jsonurl";

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
      this.results = JsonURL.parse(params["donnees"], { AQF: true });
    });
  }
}
