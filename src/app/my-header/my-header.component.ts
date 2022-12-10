import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { HeaderLink } from '../model/header-links';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {
  mobMenu:boolean = true;
  routerLinks:HeaderLink[]=[]       /**
  {
      link:"gallery",
      name:"Gallery",
    },
    {
      link:"blog/semantic-versioning",
      name:"Blogs",
    }
  */
  isLoggedIn:boolean = false;

  constructor(private _authService:AuthService) { }

  ngOnInit() {
    this._authService?.loginChanged$.subscribe(loggedIn=>{
      this.isLoggedIn = loggedIn;
      if(this.isLoggedIn){
        this.routerLinks.splice(0,0,{
          link:"account",
          name:"Home",
        })
      }
      else{
        this.routerLinks.splice(0,1)
      }
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
