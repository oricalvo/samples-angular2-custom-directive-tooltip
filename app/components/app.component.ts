import {Component, ViewChild} from '@angular/core';
import {TooltipService} from "../directives/tooltip.service";
import {TooltipDirective} from "../directives/tooltip.directivet";

@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  clockTooltip: string;
  @ViewChild("tooltip") tooltip: TooltipDirective;

  constructor() {
    this.clockTooltip = "Jerusalem Time";
  }

  changeTooltip() {
    this.clockTooltip = "XXX";
  }

  ngOnInit() {
    console.log(this.tooltip);
  }
}
