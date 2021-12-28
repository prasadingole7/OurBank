import { AbstractControl } from "@angular/forms";

export function validIdValidator(control:AbstractControl): {[key:string]:boolean} |null {
  const id=control.get('id');
  return id && id.value !=0 && id.value < 0 ? {"idNotValid" : true} : null;
}
