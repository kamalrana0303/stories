import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountPageComponent } from './my-account-page/my-account-page.component';
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSelectModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { UserNameComponent } from './user-name/user-name.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyAccountEditPageWithoutMenuComponent } from './my-account-edit-page-without-menu/my-account-edit-page-without-menu.component';
import { GenderComponent } from './gender/gender.component';
import { DobComponent } from './dob/dob.component';
const material =[
  MatTabsModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
]

@NgModule({
  declarations: [
    MyAccountPageComponent,
    ToolbarComponent,
    PersonalInfoComponent,
    MyHomeComponent,
    UserNameComponent,
    MyAccountEditPageWithoutMenuComponent,
    GenderComponent,
    DobComponent,
    
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    material
  ],

})
export class MyAccountModule { }
