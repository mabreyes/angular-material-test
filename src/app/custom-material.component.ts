import { NgModule } from '@angular/core';
import { MdInputModule, MdCardModule, MdButtonModule, MdIconModule, MdMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ MdInputModule, MdCardModule, MdButtonModule, BrowserAnimationsModule, MdIconModule, MdMenuModule ],
  exports: [ MdInputModule, MdCardModule, MdButtonModule, BrowserAnimationsModule, MdIconModule, MdMenuModule ]
})

export class CustomMaterialComponent {

}
