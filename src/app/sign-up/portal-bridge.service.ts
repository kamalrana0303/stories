import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { Data } from '@angular/router';
import {  Subject } from 'rxjs';
import { CompleteSignUpComponent } from './complete-sign-up/complete-sign-up.component';
export interface Date {
  init:boolean;
  portal:ComponentPortal<any>
}
export type portalType = ComponentPortal<any> | TemplatePortal
@Injectable({
  providedIn: 'root'
})
export class PortalBridgeService {
  currentPortal:ComponentPortal<any> |undefined;
  private  _portal:Subject<portalType> = new Subject();
  public readonly portal$= this._portal.asObservable();
  constructor() { }
  setPortal(component:ComponentPortal<any>){
    if(this.currentPortal){
      this.currentPortal.detach();
    }
    this.currentPortal = component;
    this._portal.next(component);
  }
}
