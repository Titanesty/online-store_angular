import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonModule } from "./components/button/button.module";
import { HotelItemModule } from "./components/hotel-item/HotelItem.module";
import { HotelListModule } from "./components/hotel-list/hotel-list.module";
import { SearchModule } from "./components/search/search.module";
import { HotelsPageComponent } from "./pages/hotels-page/hotels-page.component";
import { HotelsPageModule } from "./pages/hotels-page/hotels-page.module";
import { FilterBlockComponent } from "./components/filter-block/filter-block.component";
import { ThePagComponent } from "./components/the-pag/the-pag.component";
import { TheInputComponent } from "./components/the-input/the-input.component";
import { FilterLayoutComponent } from "./components/filter-layout/filter-layout.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HotelsPageComponent,
    FilterBlockComponent,
    ThePagComponent,
    TheInputComponent,
    FilterLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HotelItemModule,
    HotelListModule,
    SearchModule,
    HotelsPageModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
