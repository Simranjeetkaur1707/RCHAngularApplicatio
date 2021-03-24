import {AbstractControl, ValidatorFn} from '@angular/forms';


export function PhoneValidator():ValidatorFn
{
    const expression = /\+91[6-9][0-9]{9}/;     
    return (control:AbstractControl):{[key:string]:any} => {        //lambda function
        const valid = expression.test(control.value);
        return valid? null : {phone:true};

    };
}
//ng gnerative directive validator/directivename