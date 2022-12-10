import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {
  mobMenu:boolean = true;
  routerLinks=[
    {
      link:"account",
      name:"Home",
    },
    {
      link:"gallery",
      name:"Gallery",
    },
    {
      link:"blog/semantic-versioning",
      name:"Blogs",
    }
  ]
  isLoggedIn:boolean = false;

  constructor(private _authService:AuthService) { }

  ngOnInit() {
    this._authService?.loginChanged$.subscribe(loggedIn=>{
      this.isLoggedIn = loggedIn;
    })
    this._authService.isLoggedIn().then(loggedIn=> {
      this.isLoggedIn = loggedIn;
    })
  }
  login(){
    this._authService.login()
  }
  logout(){
    this._authService.logout()
  }
}
