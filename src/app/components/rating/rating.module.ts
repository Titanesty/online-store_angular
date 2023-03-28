import { NgModule } from "@angular/core";
import { RatingComponent } from "./rating.component";
import { NgForOf, NgStyle } from "@angular/common";

@NgModule({
  declarations: [RatingComponent],
  imports: [NgForOf, NgStyle],
  providers: [],
  exports: [RatingComponent],
  bootstrap: [],
})
export class RatingModule {}
