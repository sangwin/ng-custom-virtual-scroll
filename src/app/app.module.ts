/* Created By : Sangwin Gawande (https://sangw.in) */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScrollDemoComponent } from './scroll-demo/scroll-demo.component';
import { ScrollDivDirective } from './scroll-demo/scroll-div.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollDemoComponent,
    ScrollDivDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Created By : Sangwin Gawande (https://sangw.in) */