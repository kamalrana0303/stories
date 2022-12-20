import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AddressComponent } from 'src/app/shared/my-account/component/address/address.component';


// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable()
export class AddressCanDeactivateGuard implements CanDeactivate<AddressComponent> {
    canDeactivate(
        component: AddressComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        if(component.isDirty && !component.success){
            
            return confirm(`Navigate away and lose all changes`);
            // if users click ok current route is deactivated and requested route is activated.
            // if users select cancel navigation is cancel
        }
        // if product data doesn't change route is deactivated
        return true;
    }
}