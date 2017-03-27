import {Component, ElementRef, HostBinding} from "@angular/core";
import {TooltipService} from "./tooltip.service";

@Component({
    selector: "tooltip",
    template: `
        <div class="content" *ngIf="isVisible">
            {{text}}
        </div>
        `,
    moduleId: module.id,
    styleUrls:["./tooltip.component.css"]
})
export class TooltipComponent {
    text: string;
    isVisible: boolean;
    //@HostBinding("style.left") left: number;
    //@HostBinding("style.right") right: number;

    constructor(private elementRef: ElementRef, private tooltipService: TooltipService) {
        this.isVisible = false;
        this.text = "Dummy text";
    }

    ngOnInit() {
        this.tooltipService.onComponentCreated(this);
    }

    show(hostElementRef: ElementRef, text: string) {
        this.text = text;
        this.isVisible = true;

        var rect = hostElementRef.nativeElement.getBoundingClientRect();
        this.elementRef.nativeElement.style.left = rect.left;
        this.elementRef.nativeElement.style.top = rect.bottom + 2;

        //this.left = hostElementRef.nativeElement.
    }

    hide() {
        this.isVisible = false;
    }
}
