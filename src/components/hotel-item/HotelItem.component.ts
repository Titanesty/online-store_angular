import { Component, Input } from "@angular/core";
import { HotelInfo } from "../../types/hotel.index";

@Component({
  selector: "HotelItem",
  templateUrl: "./HotelItem.component.html",
  styleUrls: ["./HotelItem.component.scss"],
})
export class HotelItemComponent {
  buttonText = "Забронировано";
  @Input() hotelInfo: HotelInfo;
  onChildClick() {}
}
