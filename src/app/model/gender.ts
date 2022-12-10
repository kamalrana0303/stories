export class Gender{
    gender?: GENDEREnum;
}
export enum GENDEREnum {
    MALE,
    FEMALE
}
export interface GenderResolved{
    gender?:Gender;
    error?:any;
}