import {TooltipComponent} from "./tooltip.component";
import {ElementRef, Renderer2} from "@angular/core";

export class TooltipService {
    private tooltip: TooltipComponent;

    constructor() {
    }

    onComponentCreated(tooltip: TooltipComponent) {
        this.tooltip = tooltip;
    }

    show(hostElementRef: ElementRef, text: string) {
        this.tooltip.show(hostElementRef, text);

        //this.renderer.setStyle(this.elementRef, "left", )
    }

    hide() {
        this.tooltip.hide();
    }
}
