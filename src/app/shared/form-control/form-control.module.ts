import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlRoutingModule } from './form-control-routing.module';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { SelectComponent } from './select/select.component';
import { RadioandcheckboxComponent } from './radioandcheckbox/radioandcheckbox.component';
import { InputgroupComponent } from './inputgroup/inputgroup.component';
import { RangeComponent } from './range/range.component';
import { FileComponent } from './file/file.component';



@NgModule({
  declarations: [FormBasicComponent, SelectComponent, RadioandcheckboxComponent, InputgroupComponent, RangeComponent, FileComponent],
  imports: [
    CommonModule,
    FormControlRoutingModule,
   
  ]
})
export class FormControlModule { }
