import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileComponent } from './file/file.component';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { InputgroupComponent } from './inputgroup/inputgroup.component';
import { RangeComponent } from './range/range.component';
import { SelectComponent } from './select/select.component';


const routes: Routes = [
  {
    path: 'form-basic', component: FormBasicComponent
  },
  {
    path:'select', component: SelectComponent
  },
  {
    path:'inputgroup', component: InputgroupComponent
  },
  {
    path: 'range', component: RangeComponent
  },
  {
    path: 'file', component: FileComponent
  },
  {
    path: '', redirectTo: 'form-basic', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormControlRoutingModule { }
