import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { EmailComponent } from './email/email.component';
import { CompleteSignUpComponent } from './complete-sign-up/complete-sign-up.component';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const material=[
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    SignUpComponent,
    EmailComponent,
    CompleteSignUpComponent
  ],
  imports: [
    CommonModule,
    PortalModule,
    ReactiveFormsModule,
    FormsModule,
    material
  ],
  exports:[SignUpComponent]
})
export class SignUpModule { }
