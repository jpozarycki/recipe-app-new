import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(private authService: AuthService, private router: Router) { }

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

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.logIn(email, password);
    } else {
       authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    }, errorMessage => {
      this.error = errorMessage;
      this.isLoading = false;
    });
    authForm.reset();
  }

}
