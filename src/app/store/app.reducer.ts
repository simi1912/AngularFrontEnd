import {ActionReducerMap} from "@ngrx/store";

import * as fromMenu from "./menuItemStore/menu.reducer";
import * as fromAuth from "../auth/store/auth.reducer";
import * as fromCart from "./cartStore/cart.reducer";
import * as fromCategory from "./categoriesStore/category.reducer";

export interface AppState {
  menuState: fromMenu.State;
  authState: fromAuth.State;
  cartState: fromCart.State;
  categoryState: fromCategory.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  menuState: fromMenu.menuReducer,
  authState: fromAuth.authReducer,
  cartState: fromCart.cartReducer,
  categoryState: fromCategory.categoryReducer
}
