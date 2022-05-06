import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
