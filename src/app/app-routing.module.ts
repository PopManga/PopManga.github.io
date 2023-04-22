import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MangaCardListComponent } from "./manga-card-list/manga-card-list.component";
import { MangaTestComponent } from "./manga-test/manga-test.component";
import { HomeComponent } from "./home/home.component";
import { MangaTestResultComponent } from "./manga-test-result/manga-test-result.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "liste", component: MangaCardListComponent },
  { path: "test", component: MangaTestComponent },
  { path: "test/resultats", component: MangaTestResultComponent },
  { path: "**", redirectTo: "/liste" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
