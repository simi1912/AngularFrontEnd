import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import {User} from "../../auth/model/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CartItem} from "../model/cart";

@Component({
  selector: 'app-delivery-information',
  templateUrl: './delivery-information.component.html',
  styleUrls: ['./delivery-information.component.css']
})
export class DeliveryInformationComponent implements OnInit {

  authForm: FormGroup;
  cartItems: CartItem[];
  cartPrice: number;
  isLoggedIn: boolean;
  loggedInUser: User;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.select("cartState")
      .subscribe(cartState => {
        this.cartItems = cartState.cart.cartItems;

        this.calculateCartPrice();
      })

    this.store.select("authState")
      .subscribe(authState=> {
        console.log(authState)
        this.loggedInUser = authState.loggedInUser;
        this.isLoggedIn = authState.isAuth;
      });

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
  }

  calculateCartPrice() {
    this.cartPrice = this.cartItems.reduce(function(accumulator, nextMenuItem){
      return accumulator + (nextMenuItem.menuItem.price * nextMenuItem.quantity);
    }, 0);
  }

  orderSubmitted() {

  }
}
