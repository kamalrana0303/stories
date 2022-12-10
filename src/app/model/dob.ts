export class DOB{
    dob:string |undefined;
}
export class DOBResolved{
    dob?: DOB;
    error?:Error;
}