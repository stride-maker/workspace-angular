import { ElementRef, HostBinding, HostListener, Input } from "@angular/core";
import { Directive, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBackgroundColor: string = "transparent";
  @Input() highlightBackgroundColor: string = "yellow";
  @Input() defaultTextColor: string = "black";
  @Input() highlightTextColor: string = "green";

  @HostBinding("style.backgroundColor") backgroundColor: string;
  @HostBinding("style.color") color: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultTextColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
  }

  @HostListener("mouseenter") mouseOver(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "backgroundColor",
    //   "yellow"
    // );
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "green");
    this.backgroundColor = this.highlightBackgroundColor;
    this.color = this.highlightTextColor;
  }

  @HostListener("mouseleave") mouseLeave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "backgroundColor",
    //   "transparent"
    // );
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "black");
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultTextColor;
  }
}
