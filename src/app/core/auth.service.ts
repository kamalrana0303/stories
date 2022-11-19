import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { CoreModule } from './core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  constructor(private _user:User, private _userManager:UserManager) { }
}
