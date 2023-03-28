import { NgModule } from "@angular/core";
import { HotelListComponent } from "./hotel-list.component";
import { HotelItemModule } from "../hotel-item/HotelItem.module";
import { NgForOf } from "@angular/common";

@NgModule({
  declarations: [HotelListComponent],
  imports: [HotelItemModule, NgForOf],
  providers: [],
  exports: [HotelListComponent],
  bootstrap: [],
})
export class HotelListModule {}
