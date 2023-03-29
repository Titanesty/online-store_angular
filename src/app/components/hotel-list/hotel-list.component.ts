import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HotelInfo } from "../../models/hotel.index";

@Component({
  selector: "HotelList",
  templateUrl: "./hotel-list-component.html",
  styleUrls: ["./hotel-list.component.scss"],
})
export class HotelListComponent {
  @Input() hotels: HotelInfo[];
  @Output() onClick = new EventEmitter();

  myClick(index: number) {
    this.onClick.emit(index);
  }
}
