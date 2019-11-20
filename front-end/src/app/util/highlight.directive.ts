import {Directive, ElementRef, HostListener, Inject, Input, Self} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() cor: string = 'yellow';

  constructor(
    @Self() private elementoHtML: ElementRef
  ) { }

  @HostListener('mouseenter')
  highlighOn() {
    this.elementoHtML.nativeElement.style.backgroundColor = this.cor;
  }


  @HostListener('mouseleave')
  highlighOff() {
    this.elementoHtML.nativeElement.style.backgroundColor = null;
  }

}
