import { Directive } from '@angular/core';


import { Validator, ValidatorFn, AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';
import { PhoneValidator } from './phonevalidator';
@Directive({
  selector: '[phone][ngModel]',
  providers: [{provide:NG_VALIDATORS, useExisting:PhoneDirective, multi:true}]
})
export class PhoneDirective implements Validator{

  private validator = PhoneValidator();

  validate(control:AbstractControl):{[key:string]:any}
  {
    return this.validator(control);
  }
}