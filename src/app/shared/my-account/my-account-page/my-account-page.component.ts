import { BreakpointObserver, Breakpoints , BreakpointState} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Tabs } from 'src/app/model/tabs';

@Component({
  selector: 'app-my-account-page',
  templateUrl: './my-account-page.component.html',
  styleUrls: ['./my-account-page.component.scss']
})
export class MyAccountPageComponent implements OnInit {
  tabs: Tabs[]=[
    {
      label: 'Account',
      route: 'home',
      icon: 'home'
    },
    {
      label: 'Personal info',
      route: 'personal-info',
      icon: 'info'
    },
    {
      label: 'Your address',
      route: 'addresses',
      icon: 'map-pin'
    }
    
  ]
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon('home', this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/svgs/home.svg`))
    this.matIconRegistry.addSvgIcon('info', this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/svgs/info.svg`))
    this.matIconRegistry.addSvgIcon('map-pin',this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/svgs/map-pin.svg`))
 
  }

}
