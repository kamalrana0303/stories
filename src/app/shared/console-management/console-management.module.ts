import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleManagementRoutingModule } from './console-management-routing.module';
import { ConsoleManagementComponent } from './console-management/console-management.component';



@NgModule({
  declarations: [
    
  
    ConsoleManagementComponent
  ],
  imports: [
    CommonModule,
    ConsoleManagementRoutingModule
  ]
})
export class ConsoleManagementModule { }
