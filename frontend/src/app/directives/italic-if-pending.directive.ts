import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[italicIfPending]'
})
export class ItalicIfPendingDirective {
  @Input() set italicIfPending(value: string | undefined) {
    if (value && value.toLowerCase() === 'en attente') {
      this.renderer.setStyle(this.el.nativeElement, 'font-style', 'italic');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'font-style', 'normal');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }
}
