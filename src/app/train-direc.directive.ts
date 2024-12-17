import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTrainDirec]'
})
export class TrainDirecDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }
}
