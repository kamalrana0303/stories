import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-story';
  isLoggedIn = false;

  constructor(private _authService: AuthService){
    
  }

  ngOnInit(){
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
  
}
