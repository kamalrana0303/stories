import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Name, NameResolved } from 'src/app/model/name';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable( )
export class UsernameResolver implements Resolve<NameResolved> {
    constructor(private _authService:AuthService){}
    resolve(route: ActivatedRouteSnapshot): Observable<NameResolved> | Promise<NameResolved> | NameResolved {
        // const id = +route.paramMap.get('id');
        const context = this._authService.authContext;
       
        if(context){
            let name = new Name();
            const profile = context.userProfile;
            name.firstName = profile?.firstName;
            name.lastName = profile?.lastName;
            name.username = profile?.firstName + " "+ profile?.lastName;
            return of({name: name, error: null});
        }
        if(!environment.production){
            console.error("please ensure auth context is initialized");
        }
        return of({name: undefined, error: 'please ensure auth context is initialized'});
    }
}