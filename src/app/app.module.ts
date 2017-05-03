import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomMaterialComponent } from './custom-material.component';

import { AppComponent } from './app.component';
import { GetInputComponent } from './get-input.component';

@NgModule({
  declarations: [
    AppComponent,
    GetInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomMaterialComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
