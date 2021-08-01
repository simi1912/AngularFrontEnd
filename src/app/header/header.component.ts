import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";

import * as fromApp from "../store/app.reducer";
import {Logout} from "../auth/store/auth.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select("authState")
      .pipe(
        map(authState => {
          return authState.isAuth
        })
      ).subscribe(isAuth => {
        this.isAuth = isAuth;
    })
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
