import { ComponentPortal } from '@angular/cdk/portal';
import {  ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { SIGN_UP_REQUESTED_OTP_PORTAL_DATA as SIGN_UP_RESPONSE_OTP_PORTAL_DATA } from 'src/app/injection-token/injection-token';
import { ErrorResponse } from 'src/app/model/error';
import { OtpResponse } from 'src/app/model/otp-response';
import { UserDetailRM } from 'src/app/model/user-detail-rm';
import { passwordCompare } from 'src/app/utils/validator';
import { EmailComponent } from '../email/email.component';
import { PortalBridgeService } from '../portal-bridge.service';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-complete-sign-up',
  templateUrl: './complete-sign-up.component.html',
  styleUrls: ['./complete-sign-up.component.scss']
})
export class CompleteSignUpComponent implements OnInit {
  error:Error | any;
  disabled:boolean =false;
  showPassword:boolean =false;
  user:UserDetailRM = new UserDetailRM();
  confirmPassword:string|undefined = '';
  fg:FormGroup =this.fb.group({
    firstName: [, [Validators.required]],
    lastName: [,Validators.required],
    otp:[,[Validators.required]],
    passwordGroup: this.fb.group({
      password: [, [Validators.required]],
      confirmPassword: [, [Validators.required]]
    }, {validators: passwordCompare})
  });
  constructor(@Inject(SIGN_UP_RESPONSE_OTP_PORTAL_DATA) public data: OtpResponse,
  private domSanitizer: DomSanitizer, 
  private matIconRegistry: MatIconRegistry, 
  private portalBridgeService:PortalBridgeService,
  private fb:FormBuilder,
  private signUpService:SignUpService,
  private router:Router,
  private cdr:ChangeDetectorRef
  ) { 
    this.user.email = this.data.email;
  }

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon('edit', this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../assets/svgs/edit.svg`))
  }
  ngAfterViewInit(){
    this.fg.reset();
    this.cdr.detectChanges();
  }

  editEmailId(){
    this.portalBridgeService.setPortal(new ComponentPortal(EmailComponent));
  }

  completeSignUp(){
    if(this.fg?.valid){
      this.user.username = this.user.firstName + " "+ this.user.lastName;
      this.disabled = true;
    this.signUpService.completeSignUp(this.user).pipe(catchError(error=> {
      this.error = error;
      this.disabled =false;
      return EMPTY
    })).subscribe(user=> {
      console.log(user)
      console.log("successfully user signup")
      this.disabled =false;
      this.router.navigate(['/account'])
    });
    }
  }

}

