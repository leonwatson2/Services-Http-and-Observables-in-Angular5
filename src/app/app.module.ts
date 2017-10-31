import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangeTitleComponent } from './change-title/change-title.component';
import { TitleService } from './title.service'

@NgModule({
  declarations: [
    AppComponent,
    ChangeTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ TitleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
