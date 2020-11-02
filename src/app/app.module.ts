import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { PopupModule } from '@progress/kendo-angular-popup';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DateInputsModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
