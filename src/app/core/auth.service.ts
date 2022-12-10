import { Injectable, Optional } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { catchError, EMPTY, from, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { AuthContext } from '../model/auth-context';

@Injectable()
export class AuthService {
  private _loginChangedSubject = new Subject<boolean>();
  public loginChanged$ = this._loginChangedSubject.asObservable();
  authContext: AuthContext | undefined;
  constructor(@Optional() private http: HttpClient,@Optional() private _user:User | null, @Optional() private _userManager:UserManager) {
    const settings = {
      authority: environment.oauth2.stsAuthority,
      client_id: environment.oauth2.clientId,
      redirect_uri: `${environment.oauth2.clientRoot}signin-callback`,
      scope: 'openid profile projects-api',
      response_type: 'code',
      automaticSilentRenew: true,
      silent_redirect_uri: `${environment.oauth2.clientRoot}assets/silent-callback.html`,
   //   post_logout_redirect_uri: `${environment.oauth2.stsAuthority}v2/logout?clientId=${environment.oauth2.clientId}&returnTo=${encodeURI(environment.oauth2.clientRoot)}signout-callback`,
      metadata: {
        issuer:`${environment.oauth2.stsAuthority}`,
        authorization_endpoint: `${environment.oauth2.stsAuthority}authorize?audience=projects-api`,
        jwks_uri:`${environment.oauth2.stsAuthority}${environment.oauth2.openIdConfig}`,
        token_endpoint:`${environment.oauth2.stsAuthority}oauth/token`,
        userinfo_endpoint:`${environment.oauth2.stsAuthority}userinfo`,
        end_session_endpoint:`${environment.oauth2.stsAuthority}v2/logout?clientId=${environment.oauth2.clientId}&returnTo=${encodeURI(environment.oauth2.clientRoot)}signout-callback`
        
      }
    }

    const liveSettings = {
      authority: environment.oauth2.stsAuthority,
      client_id: environment.oauth2.clientId,
      client_secret: environment.oauth2.client_secret,
      redirect_uri: `${environment.oauth2.clientRoot}signin-callback`,
      scope: 'openid',
      response_type: 'code',
      automaticSilentRenew: true,
      silent_redirect_uri: `${environment.oauth2.clientRoot}assets/silent-callback.html`,
      metadata: {
        issuer:`${environment.oauth2.issuer}`,
        authorization_endpoint: `${environment.oauth2.stsAuthority}oauth2/authorize`,
        jwks_uri:`${environment.oauth2.stsAuthority}oauth2/jwks`,
        token_endpoint:`${environment.oauth2.stsAuthority}oauth2/token`,
        userinfo_endpoint:`${environment.oauth2.stsAuthority}userinfo`,
        end_session_endpoint:`${environment.oauth2.stsAuthority}logout?clientId=${environment.oauth2.clientId}&returnTo=${encodeURI(environment.oauth2.clientRoot)}signout-callback`
      }
    }
  
    this._userManager = new UserManager(liveSettings);
    this._userManager.events.addAccessTokenExpired(_=>{
      this._loginChangedSubject.next(false)
    })
    this._userManager.events.addUserLoaded(user=>{
      if(this._user !== user){
        this._user = user;
        this.loadSecurityContext();
        this._loginChangedSubject.next( !!user && !user.expired)
      }
    })
  }

  login(){
    return this._userManager.signinRedirect();
  }

  logout(){
    return this._userManager.signoutRedirect();
  }

  isLoggedIn():Promise<boolean>{
    return this._userManager.getUser().then(user=> {
      const currentUser = !!user && !user.expired;
      if(this._user !== user){
        this._loginChangedSubject.next(currentUser);
      }
      if(currentUser && !this.authContext){
       
        this.loadSecurityContext();
      }
      this._user = <any> user;
      return currentUser;
    })
  }

  completeLogin(){
    return this._userManager.signinRedirectCallback().then(user=>{
      this._user = user;
      this._loginChangedSubject.next(!!user  && !user.expired);
      return user;
    })
  }

  completeLogout(){
    this._user= null;
    this._loginChangedSubject.next(false)
    return this._userManager.signoutRedirectCallback();
  }

  getAccessToken(){
    return this._userManager.getUser().then(user=> {
      if(!!user && !user.expired){
        return user.access_token;
      }
      return null;
    })
  }

  getAuthHeaders(){
    const access_token:any = this.getAccessToken();
    const headers = new HttpHeaders();
    headers.set("Authorization", `Bearer ${access_token}`);
    return headers;
  }

  loadSecurityContext(){
      this.http.get<AuthContext>(`${environment.oauth2.apiRoot}auth-context`).pipe(catchError(x=>{
        return EMPTY;
      })).subscribe((context:any)=>{
      
        this.authContext = new AuthContext();
        this.authContext.claims = context.claims;
        this.authContext.userProfile = context.userProfile;
        this.authContext.sub = context.sub;
      })
  }

  loadSecurityContextObs(){
    return this.http.get<AuthContext>(`${environment.oauth2.apiRoot}auth-context`).pipe(tap((context:any)=>{
      this.authContext = new AuthContext();
        this.authContext.claims = context.claims;
        this.authContext.userProfile = context.userProfile;
        this.authContext.sub = context.sub;
    }));
  }

  
}
