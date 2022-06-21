/* Created By : Sangwin Gawande (https://sangw.in) */

import { Directive, HostListener, EventEmitter, Output } from "@angular/core";

@Directive({
  selector: '[appScrollDiv]'
})
export class ScrollDivDirective {

  @Output() onScroll = new EventEmitter<string>();

  valueInPercentage: number = 80;

  @HostListener("scroll", ["$event"])
  onListenerTriggered(event: any): void {
    const scrollTop = event.srcElement.scrollTop;
    const scrollHeight = event.srcElement.scrollHeight;
    const clientHeight = event.srcElement.clientHeight;

    const scrolledPercentage = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);

    if (this.valueInPercentage !== scrolledPercentage) {

      this.valueInPercentage = scrolledPercentage;
      if (this.valueInPercentage == 100 || this.valueInPercentage == 0) {
        let direction = (this.valueInPercentage == 100 ) ? 'down' : 'up'
        this.onScroll.emit(direction);
      }
    }
  }
}
/* Created By : Sangwin Gawande (https://sangw.in) */