import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddFieldFormComponent } from './add-field-form/add-field-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFieldFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
