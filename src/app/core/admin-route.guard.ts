import { Injectable } from '@angular/core';
import { TransitionCheckState } from '@angular/material';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';

@Injectable()
export class AdminRouteGuard implements CanActivate {
    constructor(private _authService:AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!!this._authService.authContext && this._authService.authContext.isAdmin){
            return true;
        }
        this._authService.login();
        return false;
    }
   
}