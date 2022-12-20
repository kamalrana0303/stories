import { ComponentPortal, Portal } from '@angular/cdk/portal';
import {
  ChangeDetectorRef,
  Component,
  Injector,
  OnInit,
  Optional,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CompleteSignUpComponent } from './complete-sign-up/complete-sign-up.component';
import { EmailComponent } from './email/email.component';
import { PortalBridgeService } from './portal-bridge.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  _portalInstance$: Observable<Portal<any>> = this.portalBridgeService.portal$;
  sendOtp: ComponentPortal<EmailComponent> | undefined;
  completeSignUp: ComponentPortal<CompleteSignUpComponent> | undefined;

  constructor(
    private injector: Injector,
    private cdr: ChangeDetectorRef,
    @Optional() private portalBridgeService: PortalBridgeService
  ) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.sendOtp = new ComponentPortal(EmailComponent, null);
    if (this.sendOtp) {
      this.portalBridgeService.setPortal(this.sendOtp);
    }
    this.cdr.detectChanges();
  }
  // ngOnDestroy() {
  //   if (this.sendOtp) {
  //     this.sendOtp.detach();
  //   }
  // }

  private createInjector(data: any, injectionToken: any): Injector {
    return Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: injectionToken,
          useValue: data,
        },
      ],
    });
  }
}
