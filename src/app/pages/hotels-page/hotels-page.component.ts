import { Component } from "@angular/core";
import { HotelInfo } from "../../models/hotel.index";

@Component({
  selector: "HotelPage",
  templateUrl: "./hotels-page.component.html",
  styleUrls: ["./hotels-page.component.scss"],
})
export class HotelsPageComponent {
  hotelsInfo: HotelInfo[] = [
    {
      desc: "Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и сауна. Из номеров открывается вид на море.",
      isAvailable: true,
      name: "Marina In",
      price: 4600,
      rating: 1,
      location: "Албания",
      reviews: 23,
      type: "Апартаменты",
    },
    {
      desc: "Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и сауна. Из номеров открывается вид на море.",
      isAvailable: true,
      name: "Marina In",
      price: 4600,
      rating: 2,
      location: "Албания",
      reviews: 23,
      type: "Апартаменты",
    },
    {
      desc: "Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и сауна. Из номеров открывается вид на море.",
      isAvailable: true,
      name: "Marina In",
      price: 4600,
      rating: 3,
      location: "Албания",
      reviews: 121,
      type: "Апартаменты",
    },
    {
      desc: "Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и сауна. Из номеров открывается вид на море.",
      isAvailable: true,
      name: "Marina In",
      price: 4600,
      rating: 4,
      location: "Албания",
      reviews: 23,
      type: "Апартаменты",
    },
    {
      desc: "Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и сауна. Из номеров открывается вид на море.",
      isAvailable: true,
      name: "Marina In",
      price: 4600,
      rating: 5,
      location: "Албания",
      reviews: 23,
      type: "Апартаменты",
    },
  ];
}
