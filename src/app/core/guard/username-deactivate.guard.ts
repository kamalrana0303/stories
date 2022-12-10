import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserNameComponent } from 'src/app/shared/my-account/component/user-name/user-name.component';



// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable()
export class UsernameDeactivateGuard implements CanDeactivate<UserNameComponent> {
    canDeactivate(
        component: UserNameComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        if(component.isDirty && !component.success){
            const name = component.name?.username
            return confirm(`Navigate away and lose all changes to ${name}`);
            // if users click ok current route is deactivated and requested route is activated.
            // if users select cancel navigation is cancel
        }
        // if product data doesn't change route is deactivated
        return true;
    }
}