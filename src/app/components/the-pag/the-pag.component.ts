import { Component, Input } from "@angular/core";

@Component({
  selector: "ThePag",
  templateUrl: "./the-pag.component.html",
  styleUrls: ["./the-pag.component.scss"],
})
export class ThePagComponent {
  @Input() allPages: number = 0;
}
