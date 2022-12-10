import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountPageComponent } from './my-account-page/my-account-page.component';
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatSelectModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { MyHomeComponent } from './component/my-home/my-home.component';
import { UserNameComponent } from './component/user-name/user-name.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyAccountEditPageWithoutMenuComponent } from './my-account-edit-page-without-menu/my-account-edit-page-without-menu.component';
import { GenderComponent } from './component/gender/gender.component';
import { DobComponent } from './component/dob/dob.component';
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
    PersonalInfoComponent,
    MyHomeComponent,
    UserNameComponent,
    MyAccountEditPageWithoutMenuComponent,
    GenderComponent,
    DobComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    material
  ],

})
export class MyAccountModule { }
