import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class UserRouteGuard implements CanActivateChild {
    constructor(private _authService:AuthService) { }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!!this._authService.authContext && this._authService.authContext.isUser){
            return true;
        }
        this._authService.login();
        return false;
    }
}