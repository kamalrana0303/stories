import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthContextError } from 'src/app/model/AuthContextErorr';
import { Gender, GenderResolved } from 'src/app/model/gender';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable()
export class GenderResolver implements Resolve<GenderResolved> {
    constructor(private _authService:AuthService){}
    resolve(route: ActivatedRouteSnapshot): Observable<GenderResolved> | Promise<GenderResolved> | GenderResolved {
        const context = this._authService.authContext;
       
        if(context){
            let gender = new Gender();
            const profile = context.userProfile;
            gender.gender = profile?.gender;
            return of({gender: gender, error: null});
        }
        if(!environment.production){
            console.error("please ensure auth context is initialized");
        }
        return of({gender: undefined, error: AuthContextError});
    }
}