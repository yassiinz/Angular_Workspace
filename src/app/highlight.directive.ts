import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color = 'green';
 
  constructor(private el: ElementRef, private renderer: Renderer2) {}
 
  ngAfterViewInit() {
    this.setBackgroundColor(this.color);
  }
 
  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor('red');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this.color);
  }
 
  @HostListener('click') onClick() {
    this.color = 'gray';
  }


}
