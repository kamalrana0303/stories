import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DOB } from '../model/dob';
import { Gender } from '../model/gender';
import { Name } from '../model/name';
import { UserProfile } from '../model/user-profile';

@Injectable()
export class UserProfileService {
    constructor(private http:HttpClient) { }

    update(user:UserProfile | Name | Gender | DOB| any):Observable<UserProfile>{
        let params:HttpParams = new HttpParams();
        Object.keys(user).forEach(function (key) {
            params = params.append(key, key=='dob'? getDate(user[key]):user[key]);        
        });
        
        return this.http.put<UserProfile>(environment.oauth2.apiRoot + "user",null, {params: params});
    }

    
    
}

export function getDate(date:Date){
    return date.toLocaleDateString('en-us')
}