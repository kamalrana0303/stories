import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductRoutingModule } from './edit-product-routing.module';
import { InfoComponent } from './info/info.component';
import { ImagesComponent } from './images/images.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadFileModule } from '../../upload-file/upload-file.module';


@NgModule({
  declarations: [
    InfoComponent,
    ImagesComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditProductRoutingModule,
    UploadFileModule
  ]
})
export class EditProductModule { }
