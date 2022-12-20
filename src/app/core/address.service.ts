import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../model/address';
import { AuthService } from './auth.service';

@Injectable()
export class AddressService {
    constructor(private http:HttpClient) { }
    
    getAddresses(userId:string):Observable<Address[]>{
        let params:HttpParams = new HttpParams();
        params = params.append("userId", userId);
        return this.http.get<Address[]>(environment.oauth2.apiRoot  + 'address/all', {params:params})
    }
    findAddressByAddressId(addressId:string, userId:string){
        let params:HttpParams = new HttpParams();
        params = params.append("userId", userId)
        return this.http.get<Address>(environment.oauth2.apiRoot + "address/"+ addressId, {params: params});
    }
    addAddress(userId:string, address:Address):Observable<Address> {
        let params:HttpParams = new HttpParams();
        params = params.append("userId", userId);
        return this.http.post<Address>(environment.oauth2.apiRoot+ "address", address, {params:params});
    }
    editAddress(userId:string, address:Address):Observable<Address>{
        let params:HttpParams = new HttpParams();
        params = params.append("userId", userId);
        return this.http.put<Address>(environment.oauth2.apiRoot +"address", address, {params:params});
    }
    deleteAddress(userId:string, addressId:string){
        let params :HttpParams = new HttpParams();
        params = params.append("userId", userId);
        params = params.append("addressId", addressId);
        return this.http.delete(environment.oauth2.apiRoot + "address",  {params:params});
    }
}