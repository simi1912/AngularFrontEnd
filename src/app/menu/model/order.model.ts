import {Address, User} from "../../auth/model/user";
import {MenuItem} from "../../store/models/menuItem.model";

export class OrderModel {

  public id: number;
  public date: Date;
  public user: User;
  public orderItem: OrderItem;
  public address: Address;
  public otherDetails: string;

}

export class OrderItem {

  public id: number;
  public menuItem: MenuItem;
  public quantity: number;

}
