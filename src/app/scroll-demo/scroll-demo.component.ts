/* Created By : Sangwin Gawande (https://sangw.in) */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-demo',
  templateUrl: './scroll-demo.component.html',
  styleUrls: ['./scroll-demo.component.css']
})
export class ScrollDemoComponent implements OnInit {
  listItems = Array.from({ length: 111 }).map((_, i) => `The Great Idea #${i}`);
  sliceIndexStart = 0;
  sliceIndexEnd = 10;
  
  displayItems = 20;
  
  constructor() { }

  ngOnInit(): void {
    this.sliceIndexEnd = this.displayItems;
  }

  scrolled(e: any, container: any){
    console.log(e)
    if(e == 'down' && this.sliceIndexEnd < this.listItems.length) {
      container.scrollTop = 10;
      if((this.sliceIndexEnd+this.displayItems) <= this.listItems.length) {
        this.sliceIndexStart = this.sliceIndexStart+this.displayItems;
      }
      this.sliceIndexEnd = this.sliceIndexEnd+this.displayItems;
    } else if(e == 'up' && this.sliceIndexStart !== 0) {
      this.sliceIndexStart = this.sliceIndexStart-this.displayItems;
      this.sliceIndexEnd = this.sliceIndexStart+this.displayItems;
      // container.scrollTop = 10;
      container.scrollTop = container.scrollHeight;
    }
  }
}
/* Created By : Sangwin Gawande (https://sangw.in) */