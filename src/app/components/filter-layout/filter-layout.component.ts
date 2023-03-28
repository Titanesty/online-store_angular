import { Component, Input } from "@angular/core";

@Component({
  selector: "FilterLayout",
  templateUrl: "./filter-layout.component.html",
  styleUrls: ["filter-layout.component.scss"],
})
export class FilterLayoutComponent {
  @Input() title: string;
}
