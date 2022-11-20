import { Injectable, Optional } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core.module';


@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  private _loginChangedSubject = new Subject<boolean>();
  loginChanged = this._loginChangedSubject.asObservable();

  constructor(@Optional() private _user:User, @Optional() private _userManager:UserManager) {
    const stsSettings = {
      authority: environment.oauth2.stsAuthority,
      client_id: environment.oauth2.clientId,
      redirect_uri: `${environment.oauth2.clientRoot}signin-callback`,
      scope: 'openid profile projects-api',
      response_type: 'code',
      post_logout_redirect_uri: `${environment.oauth2.clientRoot}signout-callback`
    }
    this._userManager = new UserManager(stsSettings);
  }

  login(){
    return this._userManager.signinRedirect();
  }

  isLoggedIn():Promise<boolean>{
    return this._userManager.getUser().then(user=> {
      const currentUser = !!user && !user.expired;
      if(this._user !== user){
        this._loginChangedSubject.next(currentUser);
      }
      this._user = <any> user;
      return currentUser;
    })
  }
}
