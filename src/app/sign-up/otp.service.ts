import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OtpRequest } from '../model/otp-request';
import { OtpResponse } from '../model/otp-response';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private http: HttpClient) { }

  sendOtp(otpRequest:OtpRequest):Observable<OtpResponse>{
    return this.http.post<OtpResponse>(environment.oauth2.apiRoot + 'otp/request', otpRequest)
  }
}
