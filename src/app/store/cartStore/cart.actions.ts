import {Action} from "@ngrx/store";
import {MenuItem} from "../models/menuItem.model";
import {CartItem} from "../../cart/model/cart";

export const ADD_TO_CART = "CartModel add to cart";
export const CHANGE_QUANTITY = "CartModel change quantity"
export const DELETE_FROM_CART = "CartModel delete from cart"

export class AddToCart implements Action{
  type: string = ADD_TO_CART;

  constructor(public payload: {
    cartItem: CartItem
  }) {}
}

export class ChangeQuantity implements Action{
  type: string = CHANGE_QUANTITY;

  constructor(public payload: {
    cartItem: CartItem
  }) {}
}

export class DeleteFromCart implements Action {
  type: string = DELETE_FROM_CART;

  constructor(public payload: {
    cartItem: CartItem
  }) {}
}

export type CartAction =
  AddToCart |
  ChangeQuantity |
  DeleteFromCart;
