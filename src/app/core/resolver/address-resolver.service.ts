import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { ResolvedAddress } from 'src/app/model/address';
import { UserProfile } from 'src/app/model/user-profile';
import { AddressService } from '../address.service';
import { AuthService } from '../auth.service';

@Injectable()
export class AddressResolver implements Resolve<ResolvedAddress> {
    constructor(private authService:AuthService, private addressService:AddressService){}
    resolve(route: ActivatedRouteSnapshot): Observable<ResolvedAddress> | Promise<ResolvedAddress> | ResolvedAddress {
        const addressId:any = route.paramMap.get("addressId");
        const pageTitle = addressId ==0 ? 'Add a new address': 'Edit address'
        const user : UserProfile | undefined=  this.authService.authContext?.userProfile;
        if(addressId && user ){
            if(user.userId){
                return this.addressService.findAddressByAddressId(addressId, user.userId).pipe(map(address=> {
                    return {address: address,pageTitle: pageTitle, userId: user.userId , error: undefined }
                } , catchError(err=>{
                    return of({address:undefined,pageTitle: pageTitle, userId: user.userId, error: Error(err.message)})
                })));
            }
            return of({address:undefined,pageTitle: pageTitle, userId: undefined,error: Error('user id may not be undefined')});
        }
        if(user){
            return of({address: undefined,pageTitle: pageTitle, userId: user.userId, error: Error("user id may not be undefined")})
        }
        return of({address:undefined ,pageTitle: pageTitle,userId: undefined,error: undefined})
    }
}