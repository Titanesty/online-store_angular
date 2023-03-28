import { NgModule } from "@angular/core";
import { HotelItemComponent } from "./HotelItem.component";
import { ButtonModule } from "../button/button.module";
import { RatingModule } from "../rating/rating.module";

@NgModule({
  declarations: [HotelItemComponent],
  imports: [ButtonModule, RatingModule],
  providers: [],
  exports: [HotelItemComponent],
  bootstrap: [],
})
export class HotelItemModule {}
