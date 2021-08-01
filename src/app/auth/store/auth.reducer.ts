import * as AuthActions from "./auth.actions";
import {Address, Gender, User} from "../model/user";

export interface State {
  isAuth: boolean;
  authError: string;
  loggedInUser: User;
}

const adminEmail: String = "simi@simi.com";
const adminPassword: String = "123456";

const defaultUser: User = {
  id: 1,
  firstName: "Ioan",
  lastName: "Simiciuc",
  email: "simi@simi.com",
  gender: Gender.male,
  address: {
    country: "Romania",
    county: "Iasi",
    city: "Iasi",
    street: "Petru Poni",
    number: 23,
    zip: 123456
  },
  phone: '0123456789',
  registeredDate: new Date(),
  lastLogin: new Date(),
  orders: [],
  currentCart: []

}

const initialState: State = {
  isAuth: false,
  authError: null,
  loggedInUser: null
}

export function authReducer(state: State = initialState,
                            action: AuthActions.AuthAction): State {

  switch (action.type) {

    case AuthActions.LOGIN:{
      if( action.payload.email === adminEmail &&
          action.payload.password === adminPassword){
        console.log("auth success")
        return{
          ...state,
          isAuth: true,
          authError: null,
          loggedInUser: defaultUser
        }
      } else {
        return {
          ...state,
          isAuth: false,
          authError: "Invalid credentials",
          loggedInUser: null
        }
      }
    }

    case AuthActions.LOGOUT:{
      console.log("logout")
      return {
        ...state,
        isAuth: false,
        authError: null,
        loggedInUser: null
      }
    }

    default:{
      return {
        ...state
      }
    }

  }

}
