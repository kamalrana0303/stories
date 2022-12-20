import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/core/address.service';
import { Address, ResolvedAddress } from 'src/app/model/address';
import {
  constCountries,
  constStateAndUTs,
  CountryCodes,
  StateAndUTs,
} from 'src/app/utils/constant';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  pageTitle: string = 'Add a new Address'
  stateAndUTs: StateAndUTs[] = constStateAndUTs;
  countryCodes: CountryCodes[] = constCountries;
  currentAddress: Address = new Address();
  originalAddress: Address = new Address();
  currentUserId: string | undefined;
  success:boolean = false;
  fg: FormGroup = this.fb.group({
    name: [, Validators.compose([Validators.required])],
    country: [, Validators.required],
    address: [, Validators.required],
    state: [, Validators.required],
    city: [, Validators.required],
    pincode: [, Validators.required],
    landMark: [],
    contactNo: [
      ,
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
    ],
    altNo: [],
  });
  constructor(
    private fb: FormBuilder,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      const resolvedData: ResolvedAddress = data['resolvedAddress']
      this.onAddressResolved(resolvedData)
    });
    this.matIconRegistry.addSvgIcon(
      'backspace',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../../../../assets/svgs/backspace.svg`
      )
    );
  }
  onAddressResolved(resolved: ResolvedAddress) {
    this.pageTitle = resolved.pageTitle;
    if (resolved.address) {
      this.address = resolved.address;
    }
    if (resolved.userId) {
      this.userId = resolved.userId;
    }
  }

  get userId(): string | undefined {
    return this.currentUserId;
  }
  set userId(value: string | undefined) {
    this.currentUserId = value;
  }

  get address(): Address {
    return this.currentAddress;
  }

  set address(value: Address) {
    if (value) {
      this.originalAddress = { ...value };
    }
    this.currentAddress = value;
  }

  get isDirty(){
    return JSON.stringify(this.currentAddress) !== JSON.stringify(this.originalAddress)
  }

  validatePhoneNo(event: any) {
    if (
      (event.keyCode > 47 && event.keyCode < 58) ||
      event.keyCode == 43 ||
      event.keyCode == 32
    )
      return event.returnValue;
    return (event.returnValue = '');
  }
  
  submit() {
    if (this.currentAddress && this.userId && this.fg.valid) {
      this.addressService
        .addAddress(this.userId, { ...this.currentAddress })
        .subscribe((res) => {
          this.success = true;
          this.router.navigate(['/account/addresses'])
        });
    }
  }
  
}
