import { Component } from "@angular/core";
import { HotelInfo } from "../../models/hotel.index";
import { Filter } from "../../models/filter.index";

@Component({
  selector: "HotelPage",
  templateUrl: "./hotels-page.component.html",
  styleUrls: ["./hotels-page.component.scss"],
})
export class HotelsPageComponent {
  hotelPlaceholder: string = "Поиск...";
  filterCounter: Filter[] = [
    { name: "Австрия", selected: false },
    { name: "Азербайджан", selected: false },
    { name: "Албания", selected: false },
    { name: "Андора", selected: false },
    { name: "Ангола", selected: false },
    { name: "Антигуа и Барбуда", selected: false },
    { name: "Азербайджан", selected: false },
    { name: "Аргентина", selected: false },
    { name: "Бахрейн", selected: false },
    { name: "Бангладеш", selected: false },
  ];
  filterType: Filter[] = [
    { name: "Апартаменты", selected: false },
    { name: "Отель", selected: false },
  ];
  filterRating: Filter[] = [
    { name: "1 звезда", selected: false },
    { name: "2 звезда", selected: false },
    { name: "3 звезда", selected: false },
    { name: "4 звезда", selected: false },
    { name: "5 звезда", selected: false },
  ];
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
    // {
    //   desc: "Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и сауна. Из номеров открывается вид на море.",
    //   isAvailable: true,
    //   name: "Marina In",
    //   price: 4600,
    //   rating: 3,
    //   location: "Албания",
    //   reviews: 121,
    //   type: "Апартаменты",
    // },
    // {
    //   desc: "Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и сауна. Из номеров открывается вид на море.",
    //   isAvailable: true,
    //   name: "Marina In",
    //   price: 4600,
    //   rating: 4,
    //   location: "Албания",
    //   reviews: 23,
    //   type: "Апартаменты",
    // },
    // {
    //   desc: "Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и сауна. Из номеров открывается вид на море.",
    //   isAvailable: true,
    //   name: "Marina In",
    //   price: 4600,
    //   rating: 5,
    //   location: "Албания",
    //   reviews: 23,
    //   type: "Апартаменты",
    // },
  ];

  clearFilter() {
    this.filterCounter.forEach((item) => {
      item.selected = false;
    });
    this.filterRating.forEach((item) => {
      item.selected = false;
    });
    this.filterType.forEach((item) => {
      item.selected = false;
    });
  }
}
