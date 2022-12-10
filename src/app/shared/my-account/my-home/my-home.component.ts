import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { AuthContext } from 'src/app/model/auth-context';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {
  context :AuthContext | undefined = this._authService.authContext;
  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    
  }

}
