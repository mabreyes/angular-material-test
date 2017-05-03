import { NgModule } from '@angular/core';
import { MdInputModule, MdCardModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [ MdInputModule, MdCardModule, MdButtonModule ],
  exports: [ MdInputModule, MdCardModule, MdButtonModule ]
})

export class CustomMaterialComponent {

}
