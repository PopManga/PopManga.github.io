import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MangaCardListComponent } from "./manga-card-list/manga-card-list.component";
import { MangaTestComponent } from "./manga-test/manga-test.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "liste", component: MangaCardListComponent },
  { path: "test", component: MangaTestComponent },
  { path: "**", redirectTo: "/liste" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
