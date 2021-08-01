import {Action} from "@ngrx/store";
import {MenuItem} from "../models/menuItem.model";

export const SET_MENU = "[Menu] set menu";
export const FETCH_MENU = "[Menu] fetch menu";

export class SetMenu implements Action{
  readonly type = SET_MENU;

  constructor(public payload: MenuItem[]) {}
}

export class FetchMenu implements Action{
  readonly type = FETCH_MENU;

  constructor(public payload:{
    name?: string,
    description?: string,
    category?: string
  }) {}
}

export type MenuActions =
  SetMenu |
  FetchMenu;
