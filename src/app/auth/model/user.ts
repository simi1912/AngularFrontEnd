import {OrderModel} from "../../menu/model/order.model";
import {Cart} from "../../cart/model/cart";

export class User {

  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public gender: Gender;
  public address: Address;
  public phone: string;
  public orders: OrderModel[];
  public registeredDate: Date;
  public lastLogin: Date;
  public currentCart: Cart[]

}

export enum Gender {
  male = 0,
  female = 1,
  other = 2
}

export class Address {

  public country: string;
  public county: string;
  public city: string;
  public street: string;
  public number: number;
  public zip: number;

}
