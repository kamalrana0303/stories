import { AbstractControl, ValidatorFn } from "@angular/forms";

export function confirmPasswordValidator(param:any):ValidatorFn{
    return (c:AbstractControl):{[key:string]:boolean} | null => {
      console.log(c.value)
      console.log(param)
      if(c!== null && isNaN(c.value) || c.value !== param){
        return {confirm:true}
      }
      return null;
    }
}

export function passwordCompare(c:AbstractControl):{[key:string]:boolean} | null{
    let password = c.get('password');
    let confirmPassword = c.get('confirmPassword');
    if(password?.value === confirmPassword?.value ){
        return null;
    }
    return {'match': true}
}
  