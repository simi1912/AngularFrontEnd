import {OrderItem} from "../../menu/model/order.model";
import {MenuItem} from "../../store/models/menuItem.model";

export class Cart {

  public id: number;
  public cartItems: CartItem[];

}

export class CartItem {

  public menuItem: MenuItem;
  public quantity: number;

}
