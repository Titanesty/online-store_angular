import { Component, Input } from "@angular/core";
import { Filter } from "../../models/filter.index";

@Component({
  selector: "FilterBlock",
  templateUrl: "./filter-block.component.html",
  styleUrls: ["./filter-block.component.scss"],
})
export class FilterBlockComponent {
  @Input() filterValue: Filter[];
}
