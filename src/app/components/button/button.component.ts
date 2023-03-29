import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "TheButton",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() buttonType: string;
  @Output() myClick = new EventEmitter();

  onClick() {
    this.myClick.emit();
  }

  isStyleButton(): string {
    if (this.buttonType === "ready") return "button--ready";
    if (this.buttonType === "default") return "button--default";
    if (this.buttonType === "empty") return "button--empty";
    return "";
  }
}
