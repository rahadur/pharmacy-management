import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class NewComponent implements OnInit {

  personalFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  loginFormGroup: FormGroup;


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.personalFormGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
    })

    this.contactFormGroup = this.fb.group({
      country: [''],
      state: [''],
    })

    this.loginFormGroup = this.fb.group({
      username: [''],
      email: [''],
    })
  }

  saveForms(): void {
    console.log(this.personalFormGroup.value);
    console.log(this.contactFormGroup.value);
    console.log(this.loginFormGroup.value);
    
  }

}
