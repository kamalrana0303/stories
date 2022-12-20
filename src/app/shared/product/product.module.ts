import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadFileComponent } from '../upload-file/upload-file/upload-file.component';
import { UploadFileModule } from '../upload-file/upload-file.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { PreviewProductComponent } from './preview-product/preview-product.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    EditProductComponent,
    PreviewProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    OverlayModule,
    UploadFileModule
  ]
})
export class ProductModule { }
