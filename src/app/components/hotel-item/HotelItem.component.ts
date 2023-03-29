import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HotelInfo } from "../../models/hotel.index";

@Component({
  selector: "HotelItem",
  templateUrl: "./HotelItem.component.html",
  styleUrls: ["./HotelItem.component.scss"],
})
export class HotelItemComponent {
  buttonText = "Забронировано";
  @Input() hotelInfo: HotelInfo;
  @Output() myClick = new EventEmitter();
  onChildClick() {
    this.myClick.emit();
  }
  getReviews(item: number): string {
    const lastPage = item % 10;
    if (lastPage === 1) return "отзыв";
    if (lastPage > 1 && lastPage < 5) return "отзыва";
    return "отзывов";
  }
  isBookedHotel(): string {
    if (this.hotelInfo.isAvailable) return "Забронировать";
    return "Забронированно";
  }
  isTypeButton(): string {
    if (this.hotelInfo.isAvailable) return "default";
    return "ready";
  }
}
