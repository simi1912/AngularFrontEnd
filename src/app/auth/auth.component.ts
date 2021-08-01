import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Login, Logout} from "./store/auth.actions";

import * as fromApp from "../store/app.reducer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private adminEmail: String = "simi@simi.com";
  private adminPassword: String = "123456";

  authError: string;
  authForm: FormGroup;

  constructor(private authStore: Store<fromApp.AppState>,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email': new FormControl(
        null,
        [
          Validators.required,
          Validators.email]),
      'password': new FormControl(
        null,
        [Validators.required]
      )
    });

    this.route.url.subscribe( urlSegment => {
      if(urlSegment[0].path === 'logout')
        this.onLogout();
    })

    this.authForm.setValue({
      'email': this.adminEmail,
      'password': this.adminPassword
    });

    this.authStore.select("authState")
      .subscribe(authState => {
        this.authError = authState.authError;
      });
  }

  onLoginSubmit(){
    this.authStore.dispatch(new Login({
        email: this.authForm.value.email,
        password: this.authForm.value.password
      })
    );
    this.router.navigate(['/home']).then()
  }

  onLogout(){
    this.authStore.dispatch(new Logout());
    this.router.navigate(['/home']).then()
  }

}
