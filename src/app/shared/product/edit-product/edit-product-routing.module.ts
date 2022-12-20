import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from 'src/app/core/resolver/product.resolver';
import { EditProductComponent } from './edit-product.component';
import { ImagesComponent } from './images/images.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '', component: EditProductComponent,
    resolve: {product:ProductResolver},
    children:[
      {
        path:"", redirectTo: "info", pathMatch: 'full'
      },
      {
        path: "info", component: InfoComponent
      },
      {
        path:"images", component:ImagesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProductRoutingModule { }
