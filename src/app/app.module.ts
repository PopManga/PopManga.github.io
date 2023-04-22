import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./home/home.component";
import { MangaCardComponent } from "./manga-card/manga-card.component";
import { MangaCardListComponent } from "./manga-card-list/manga-card-list.component";
import { MangaTestComponent } from "./manga-test/manga-test.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MangaCardComponent,
    MangaCardListComponent,
    MangaTestComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
