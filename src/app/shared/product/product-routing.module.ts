import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from 'src/app/core/resolver/product.resolver';
import { ProductsResolver } from 'src/app/core/resolver/products.resolver';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PreviewProductComponent } from './preview-product/preview-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    resolve: { resolvedProducts: ProductsResolver },
  },
  {
    path: ':id/edit',
    loadChildren: ()=> import("../product/edit-product/edit-product.module").then(m=>m.EditProductModule)
  },
  {
    path: ':id',
    component: PreviewProductComponent,
    resolve: {resovleProduct: ProductResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
