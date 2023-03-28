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

@NgModule({
  declarations: [AppComponent, HotelsPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HotelItemModule,
    HotelListModule,
    SearchModule,
    HotelsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
