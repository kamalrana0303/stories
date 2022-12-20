import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../core/auth.service';
import { HeaderLink } from '../model/header-links';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent implements OnInit {
  mobMenu: boolean = true;
  isAdmin: boolean |undefined = false;
  routerLinks: HeaderLink[] = [
    {
      link: 'account',
      name: 'Home',
      isLoggedInReq: true,
      isAdminReq: false,
    },
    {
      link: 'console',
      name: 'Console',
      isLoggedInReq: true,
      isAdminReq: true,
    },
  ]; /**
  {
      link:"gallery",
      name:"Gallery",
    },
    {
      link:"blog/semantic-versioning",
      name:"Blogs",
    }
  */
  isLoggedIn: boolean = false;

  constructor(
    private _authService: AuthService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.matIconRegistry.addSvgIcon(
      'settings',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/svgs/settings.svg'
      )
    );
    this._authService?.loginChanged$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this.isAdmin = this._authService.authContext?.isAdmin;
    });
    this._authService.isLoggedIn().then((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this.isAdmin = this._authService.authContext?.isAdmin;
    });
  }
  login() {
    this._authService.login();
  }
  logout() {
    this._authService.logout();
  }
}
