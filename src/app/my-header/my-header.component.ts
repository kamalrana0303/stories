import { Component, OnInit } from '@angular/core';
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
      link:"",
      name:"Home",
    },
    {
      link:"gallery",
      name:"Gallery",
    }
  ]


  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  login(){
    this.authService.login()
  }
}
