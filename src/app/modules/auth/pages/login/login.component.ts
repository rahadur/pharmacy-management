import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  get username() {  return this.loginForm.get('username');  }
  // get password() {  return this.loginForm.get('password');  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(20)]
      ],
      remember: [false]
    })
  }

  getControl(name) {
    return this.loginForm.get(name);
  }

  loginUser(): void {
    console.log(this.loginForm.value);
    
  }

}
