import { Component, Input } from "@angular/core";

@Component({
  selector: "TheInput",
  templateUrl: "the-input.component.html",
  styleUrls: ["./the-input.component.scss"],
})
export class TheInputComponent {
  @Input() type: string = "text";
  @Input() placeholderValue: string = "";
}
