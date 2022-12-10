import { CdkPortal, ComponentPortal, Portal } from '@angular/cdk/portal';
import { ChangeDetectorRef, Component, Injector, OnInit, Optional, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, tap } from 'rxjs';
import { SIGN_UP_REQUESTED_OTP_PORTAL_DATA } from '../injection-token/injection-token';
import { CompleteSignUpComponent } from './complete-sign-up/complete-sign-up.component';
import { EmailComponent } from './email/email.component';
import { PortalBridgeService } from './portal-bridge.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  _portalInstance$: Observable<Portal<any>> = this.signUpService.portal$;
  sendOtp: ComponentPortal<EmailComponent> | undefined;
  completeSignUp: ComponentPortal<CompleteSignUpComponent> | undefined;

  constructor(private injector:Injector,private cdr:ChangeDetectorRef,  @Optional() private signUpService:PortalBridgeService) { 
    
  }

  ngOnInit(): void {
    
    this.sendOtp = new ComponentPortal(EmailComponent);
  }

  ngAfterViewInit(){
    if(this.sendOtp){
     this.signUpService.setPortal(this.sendOtp);
     
    }  
    this.cdr.detectChanges();
   
  }
  ngOnDestroy(){
    if(this.sendOtp){
      this.sendOtp.detach();
    }
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

}
