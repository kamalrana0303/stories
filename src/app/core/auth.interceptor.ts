import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {tap} from 'rxjs/operators'
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private _authService:AuthService, private _router:Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | any> {
        if(req.url.startsWith(environment.oauth2.apiRoot)){
            return from(this._authService.getAccessToken().then((token:any)=> {
                let authReq = req;
                if(token){
                    authReq = req.clone({setHeaders: {"Authorization": `Bearer ${token}`}});
                }
        
                return next.handle(authReq).pipe(tap(_=>{},error=>{
                    var response_error = error as HttpErrorResponse;
                    if(response_error && (response_error.status === 401  || response_error.status === 403)){
                        this._router.navigate(['/unauthorized']);
                    }
                })).toPromise();
            })); 
        }
        else{
            return next.handle(req);
        }
    }
}