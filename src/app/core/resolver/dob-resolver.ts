import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthContextError } from 'src/app/model/AuthContextErorr';
import { DOB, DOBResolved } from 'src/app/model/dob';
import { AuthService } from '../auth.service';

@Injectable( )
export class DOBResolver implements Resolve<DOBResolved> {
    constructor(private _authService:AuthService){}
    resolve(route: ActivatedRouteSnapshot): Observable<DOBResolved> | Promise<DOBResolved> | DOBResolved {
        if(this._authService.authContext){
            let user = this._authService.authContext.userProfile;
            return of({dob: {dob: user?.dob}, error:undefined});
        }
        
        return of({dob:undefined, error: {message: AuthContextError, name:"AuthContextError"}});
    }
}