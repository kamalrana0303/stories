import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

export type portalType = ComponentPortal<any> | TemplatePortal
@Injectable({
  providedIn: 'root'
})
export class PortalBridgeService {
  private  _portal:Subject<portalType> = new Subject();
  public readonly portal$= this._portal.asObservable();
  constructor() { }
  setPortal(component:ComponentPortal<any>){
    this._portal.next(component);
  }
}
