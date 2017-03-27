import {Directive, ElementRef, HostListener, Input, Renderer, Renderer2} from "@angular/core";
import {TooltipService} from "./tooltip.service";

const log = console.log.bind(console, "TootipDirective>");

@Directive({
    selector: "[tooltip]",
    exportAs: "tooltip"
})
export class TooltipDirective {
    @Input('tooltip') text: string;
    timer: any;

    constructor(private tooltipService: TooltipService,
                private elementRef: ElementRef,
                private renderer: Renderer2) {
        log("ctor", this.text);

        log("nativeElement", elementRef.nativeElement);
    }

    ngOnChanges() {
        log("ngOnChanges", this.text);
    }

    ngOnInit() {
        log("ngOnInit", this.text);

        // setTimeout(()=> {
        // }

        //var root = this.renderer.selectRootElement("my-app");
        //console.log(root);
    }

    @HostListener("mouseenter")
    onMouseEnter() {
        this.resetTimer();
    }

    @HostListener("mousemove")
    onMouseMove() {
        this.resetTimer();
    }

    @HostListener("mouseleave")
    onMouseLeave() {
        this.stopTimer();
    }

    private resetTimer() {
        this.stopTimer();

        this.timer = setTimeout(()=> {
            this.tooltipService.show(this.elementRef, this.text);
        }, 700);
    }

    private stopTimer() {
        this.tooltipService.hide();

        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    ngOnDestroy() {
        log("ngOnDestroy", this.text);
    }
}
