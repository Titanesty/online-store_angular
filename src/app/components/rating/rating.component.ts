import { Component, Input } from "@angular/core";

@Component({
  selector: "TheRating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"],
})
export class RatingComponent {
  @Input() rating: number;
  stars: number[] = new Array(5);
}
