import {Action} from "@ngrx/store";

export const LOGIN = 'Auth - login';
export const LOGOUT = 'Auth - logout';

export interface AuthAction extends Action{
  payload?: {
    email?: string,
    password?: string
  }
}

export class Login implements AuthAction {
  readonly type: string = LOGIN;

  constructor(
    public payload: {
      email: string,
      password: string
    }
  ) {}
}

export class Logout implements AuthAction {
  readonly type: string = LOGOUT;
}


