import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {

  @Input() includeEls: any[] = [];
  @Output() clickOutside = new EventEmitter<MouseEvent>();

  onClick = (event: MouseEvent): void => {
    // check if element contains the click target
    if (
      !this.elementRef.nativeElement.contains(event.target as Element) &&
      !this.isInclude(event)
    ) {
      this.clickOutside.emit(event);
    }
  };

  constructor(
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
      window.addEventListener('click', this.onClick, true);}

  isInclude(event: MouseEvent): boolean {
    return this.includeEls.some((item) => {
      const element =
        item instanceof Element ? item : item.elementRef.nativeElement;
      return element.contains(event.target);
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('click', this.onClick, true);
  }
}
