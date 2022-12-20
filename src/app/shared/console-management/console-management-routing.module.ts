import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleManagementComponent } from './console-management/console-management.component';


const routes: Routes = [
  {
    path: 'admin', component: ConsoleManagementComponent, children: [
      {
        path: 'products', loadChildren: ()=> import('../product/product.module').then(m=>m.ProductModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleManagementRoutingModule { }
