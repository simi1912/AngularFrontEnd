
import * as CartActions from "./cart.actions";
import {MenuItem} from "../models/menuItem.model";
import {OrderItem} from "../../menu/model/order.model";
import {Cart, CartItem} from "../../cart/model/cart";

export interface State{
  cart: Cart;
}

const initialState: State = {
  cart: {
    id: 0,
    cartItems: []
  }
};

export function cartReducer(state: State = initialState, action:CartActions.CartAction): State{

  switch (action.type){
    case CartActions.ADD_TO_CART: {
      let cartItems = state.cart.cartItems.slice();

      let cartItemIndex = cartItems.findIndex(
        cartItem => cartItem.menuItem.id == action.payload.cartItem.menuItem.id
      )

      if (cartItemIndex == -1){
        cartItems.push(action.payload.cartItem);
      } else {
        let cartItemToUpdate = cartItems[cartItemIndex];
        cartItems[cartItemIndex] = {
          ...cartItemToUpdate,
          quantity: cartItemToUpdate.quantity + 1
        };
      }

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems
        }
      }

    }

    case CartActions.CHANGE_QUANTITY: {
      let cartItems = state.cart.cartItems.slice();

      let cartItemIndex = cartItems.findIndex(
        cartItem => cartItem.menuItem.id == action.payload.cartItem.menuItem.id)

      cartItems[cartItemIndex] = action.payload.cartItem;

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: cartItems
        }
      };
    }

    case CartActions.DELETE_FROM_CART: {
      let cartItems = state.cart.cartItems.slice()
        .filter(cartMenuItem =>
          cartMenuItem.menuItem.id != action.payload.cartItem.menuItem.id);

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: cartItems
        }
      }
    }

    default: {
      return {
        ...state
      };
    }

  }

}

