import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { UserDetailRM } from "../model/user-detail-rm";

@Injectable({providedIn:'root'})
export class SignUpService{
    constructor(private http:HttpClient){}
    completeSignUp(user:UserDetailRM){
        return this.http.post(environment.oauth2.apiRoot + "user/sign-up", user)
    }
}