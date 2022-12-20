import { Address } from "./address";
import { GENDEREnum } from "./gender";

export class UserProfile{
    username:string | undefined;
    userId:string | undefined;
    firstName:string | undefined;
    lastName:string | undefined;
    email:string | undefined;
    gender:GENDEREnum | undefined;
    dob: string | undefined;
    address:Address[] | undefined;
}