import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/core/address.service';
import { CommonFunctionalityComponent } from 'src/app/core/common-functionality/common-functionality.component';
import { Address, ResolvedAddresses } from 'src/app/model/address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent extends CommonFunctionalityComponent implements OnInit {
  currentAddresses: Address[] = [];
  currentUserId: string| undefined;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private activateRoute: ActivatedRoute,
    router: Router,
    private addressService:AddressService
  ) {
    super(router);
  }

  
  override ngOnInit(): void {

    this.matIconRegistry.addSvgIcon(
      'add',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../../../../../assets/svgs/add.svg`
      )
    );
    this.activateRoute.data.subscribe((data) => {
      const addressess: ResolvedAddresses = data['resolvedAddresses'];
      this.addresssesRetrieved(addressess);
    });
  }
  addresssesRetrieved(resolved: ResolvedAddresses) {
    if (resolved.addresses) {
      this.addresses = resolved.addresses;
    }
    if (resolved.userId) {
      this.userId = resolved.userId;
    }
  }

  set addresses(value: Address[]) {
    this.currentAddresses = value;
  }

  get addresses(): Address[] {
    return this.currentAddresses;
  }

  set userId(value: string| undefined){
    this.currentUserId = value;
  }

  get userId(): string | undefined{
    return this.currentUserId;
  }

  routeTo(id: string | number) {
    this.router.navigate(['/account/address', id]);
  }
  edit(addressId:string){
    this.router.navigate(['/account/address',addressId])
  }
  remove(addressId:string){
    if(this.userId){
      this.addressService.deleteAddress(this.userId, addressId).subscribe( res=> {
        this.reloadCurrent();
      })
    }
  }

  reloadCurrent(){
    this.reloadComponent(true);
  }
}
