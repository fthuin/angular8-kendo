import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';








@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    DateInputsModule,
    InputsModule,
    NotificationModule,
    PDFExportModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
