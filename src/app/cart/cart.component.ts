import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {MenuItem} from "../store/models/menuItem.model";
import {ActivatedRoute, Router} from "@angular/router";

import * as fromApp from "../store/app.reducer";
import * as CartActions from "../store/cartStore/cart.actions";
import {User} from "../auth/model/user";
import {Cart} from "./model/cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;
  cartPrice: number;

  constructor(private store: Store<fromApp.AppState>,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.store.select("cartState")
      .subscribe( cartState => {
        this.cart = cartState.cart;
        this.calculateCartPrice();
      })
  }

  quantityChange(menuItem: MenuItem, quantity: number) {
    if (quantity > 0)
      this.store.dispatch(new CartActions.ChangeQuantity({
          cartItem: {
            menuItem: menuItem,
            quantity: quantity
          }
        })
      );
    else
      this.store.dispatch(new CartActions.DeleteFromCart({
          cartItem: {
            menuItem: menuItem,
            quantity: 0
          }
        })
      );
  }

  calculateCartPrice() {
    this.cartPrice = this.cart.cartItems.reduce((totalPrice, nextMenuItem) =>
      totalPrice + (nextMenuItem.menuItem.price * nextMenuItem.quantity), 0);
  }

  cartAccepted() {
    this.router.navigate(['deliveryInfo'], {relativeTo: this.route}).then();
  }
}
