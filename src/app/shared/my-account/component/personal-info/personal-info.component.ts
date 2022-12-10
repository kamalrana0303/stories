import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/core/auth.service';
import { AuthContext } from 'src/app/model/auth-context';
import { GENDEREnum } from 'src/app/model/gender';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  env:any = environment;
  context:AuthContext|undefined;
  GenderEnum: typeof GENDEREnum = GENDEREnum;
  constructor(private _authService:AuthService,
    private matIconRegistry:MatIconRegistry, 
    private domSanitizer:DomSanitizer) { }
  
  ngOnInit(): void {
    this.context = this._authService.authContext;
    this.matIconRegistry.addSvgIcon('chevronRight', this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/svgs/chevron-right.svg`))
  }
}
