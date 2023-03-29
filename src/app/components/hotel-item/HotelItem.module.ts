import { NgModule } from "@angular/core";
import { HotelItemComponent } from "./HotelItem.component";
import { ButtonModule } from "../button/button.module";
import { RatingModule } from "../rating/rating.module";
import { NgSwitch, NgSwitchCase } from "@angular/common";

@NgModule({
  declarations: [HotelItemComponent],
  imports: [ButtonModule, RatingModule, NgSwitch, NgSwitchCase],
  providers: [],
  exports: [HotelItemComponent],
  bootstrap: [],
})
export class HotelItemModule {}
