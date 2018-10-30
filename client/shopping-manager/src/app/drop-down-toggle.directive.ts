import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDownToggle]'
})
export class DropDownToggleDirective {

  @HostBinding("class.open") isOpen = false;

  constructor() { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
