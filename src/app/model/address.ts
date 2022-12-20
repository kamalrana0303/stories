export class Address {
  addressId:string | any='';
  name: string | any='';
  country: string | any='';
  address: string | any='';
  state: string | any='';
  city: string | any='';
  pincode: string | any='';
  landmark: string | any='';
  contactNo: string | any='';
  altNo: string | any='';
}
export class ResolvedAddresses {
  addresses: Address[] = [];
  userId: string| undefined;
  error?: Error;
}

export class ResolvedAddress{
  address:Address | undefined;
  userId: string| undefined;
  pageTitle: string = 'Add a new address'
  error?:Error;
}
