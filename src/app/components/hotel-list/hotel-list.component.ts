import { Component, Input } from "@angular/core";
import { HotelInfo } from "../../models/hotel.index";

@Component({
  selector: "HotelList",
  templateUrl: "./hotel-list-component.html",
  styleUrls: ["./hotel-list.component.scss"],
})
export class HotelListComponent {
  @Input() hotels: HotelInfo[];
}
