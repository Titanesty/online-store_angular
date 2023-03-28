import { Component, Input } from "@angular/core";
import { HotelInfo } from "../../models/hotel.index";

@Component({
  selector: "HotelItem",
  templateUrl: "./HotelItem.component.html",
  styleUrls: ["./HotelItem.component.scss"],
})
export class HotelItemComponent {
  buttonText = "Забронировано";
  @Input() hotelInfo: HotelInfo;
  onChildClick() {}
  getReviews(item: number): string {
    const lastPage = item % 10;
    if (lastPage === 1) return "отзыв";
    if (lastPage > 1 && lastPage < 5) return "отзыва";
    return "отзывов";
  }
}
