import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "TheButton",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() buttonType: boolean;
  @Output() myClick = new EventEmitter();

  onClick() {
    this.myClick.emit();
  }
}
