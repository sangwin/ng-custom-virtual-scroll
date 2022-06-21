/* Created By : Sangwin Gawande (https://sangw.in) */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScrollDemoComponent } from './scroll-demo/scroll-demo.component';

const routes: Routes = [
  {
    path: '', component: ScrollDemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/* Created By : Sangwin Gawande (https://sangw.in) */