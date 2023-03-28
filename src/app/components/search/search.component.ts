import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "TheSearch",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
  searchValue: string;
  @Input() searchPlaceholder: string = "";
}
