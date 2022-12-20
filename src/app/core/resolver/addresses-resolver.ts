import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ResolvedAddresses } from 'src/app/model/address';
import { AddressService } from '../address.service';
import { AuthService } from '../auth.service';

@Injectable()
export class AddressesResolver implements Resolve<ResolvedAddresses> {
  constructor(
    private authService: AuthService,
    private addressService: AddressService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<ResolvedAddresses>
    | Promise<ResolvedAddresses>
    | ResolvedAddresses {
        const user = this.authService.authContext?.userProfile;
    if (user && user.userId) {
       
      return this.addressService.getAddresses(user.userId).pipe(map((addresses) => {
            return { addresses: addresses, userId: user.userId, error: undefined };
        }));
    }
    return { addresses: [], userId: undefined,error: Error('user id can not be undefined') };
  }
}
