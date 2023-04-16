import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MangaCardComponent } from "./manga-card/manga-card.component";
import { MangaCardListComponent } from "./manga-card-list/manga-card-list.component";
import { MangaTestComponent } from "./manga-test/manga-test.component";

@NgModule({
  declarations: [
    AppComponent,
    MangaCardComponent,
    MangaCardListComponent,
    MangaTestComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
