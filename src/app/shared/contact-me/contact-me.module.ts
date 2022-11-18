import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactMeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ContactMeComponent
  ]
})
export class ContactMeModule { }
