import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  constructor(private authService: AuthService) { }

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit() {
  }

  onSubmit(authForm: NgForm) {
    if (authForm.invalid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;
    console.log(authForm.value);

    if (this.isLoginMode) {
      // ...
    } else {
      this.authService.signUp(email, password).subscribe(resData => {
        console.log(resData);
      }, error1 => {
        console.log(error1);
      });

    }
    authForm.reset();
  }
}
