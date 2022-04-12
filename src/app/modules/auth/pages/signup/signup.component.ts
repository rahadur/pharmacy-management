import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNamValidator } from 'src/app/shared/validators/forbidden-name.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  //get name() { return this.signupform.get('name'); }
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userid: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(5),
        ],
      ],
      name: ['', [Validators.required, 
          Validators.maxLength(15), 
          Validators.pattern('^[a-zA-Z]+$'),
          forbiddenNamValidator(/admin/)
        ]
      ],
      age: ['', [Validators.required]],
      registrationdate: ['', [
        Validators.required, 
        Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]
      ],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male', [Validators.required]],
      language: ['', [Validators.required]],
      about: ['', [Validators.required]],
    });
  }
  
  fromControl(name) {
    return this.signupForm.get(name);
  }


  onsubmit() {
    console.log(this.signupForm.value);
  }
}
