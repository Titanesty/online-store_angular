import { NgModule } from "@angular/core";
import { RatingComponent } from "./rating.component";
import { NgForOf } from "@angular/common";

@NgModule({
  declarations: [RatingComponent],
  imports: [NgForOf],
  providers: [],
  exports: [RatingComponent],
  bootstrap: [],
})
export class RatingModule {}
