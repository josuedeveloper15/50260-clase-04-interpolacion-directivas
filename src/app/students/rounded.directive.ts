import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRounded]',
})
export class RoundedDirective {
  constructor(elementRef: ElementRef, renderer: Renderer2) {
    console.log('Se inicializo la directiva RoundedDirective', elementRef);

    renderer.setStyle(elementRef.nativeElement, 'background-color', 'yellow');
    renderer.setStyle(elementRef.nativeElement, 'padding', '20px');
    renderer.setStyle(elementRef.nativeElement, 'border-radius', '20px');
  }
}
