import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNamValidator(nameRegx: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRegx.test(control.value);
    return forbidden ? { forbidden: { value: control.value } } : null;
  };
}


