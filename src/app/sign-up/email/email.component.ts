import { ComponentPortal } from '@angular/cdk/portal';
import { Component, InjectionToken, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { catchError, EMPTY, map } from 'rxjs';
import { SIGN_UP_REQUESTED_OTP_PORTAL_DATA } from 'src/app/injection-token/injection-token';
import { ErrorResponse } from 'src/app/model/error';

import { CompleteSignUpComponent } from '../complete-sign-up/complete-sign-up.component';
import { OtpService } from '../otp.service';
import { PortalBridgeService } from '../portal-bridge.service';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  disabled:boolean = false;
  error:ErrorResponse| undefined;
  fg:FormGroup = this.fb.group({email: []})
  completeSignUp:ComponentPortal<CompleteSignUpComponent> | undefined;
  
  constructor(private injector:Injector,private matIconRegistry: MatIconRegistry,private otpService:OtpService,private portalBridgeService:PortalBridgeService, private domSanitizer: DomSanitizer, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon('paperline-airplane', this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/svgs/paper-airline.svg"));
  }

  private createInjector(data:any, injectionToken:any):Injector{
    return Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: injectionToken, useValue: data
        }
      ]
    })
  }

  sendOtp(){
    this.disabled = true;
    this.error = undefined;
    this.otpService.sendOtp(this.fg.value).pipe(catchError((error:ErrorResponse)=>{
      this.disabled = false;
      this.error = error;
      return EMPTY;
    })).subscribe(otp=> {
      this.disabled =false;
      this.completeSignUp  = new ComponentPortal(CompleteSignUpComponent,null,
        this.createInjector(otp, SIGN_UP_REQUESTED_OTP_PORTAL_DATA));
      this.portalBridgeService.setPortal(this.completeSignUp);
    })
  }

}
