import {Category} from "../models/category.model";

import * as CategoryActions from "./category.actions";

export interface State{
  categories: Category[];
}

const initialState: State = {
  categories: [
    {
      id: 1,
      name: 'soup',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    {
      id: 2,
      name: 'burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    {
      id: 3,
      name: 'pizza',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    }
  ]
}

export function categoryReducer(state: State = initialState, action:CategoryActions.CategoriesActions){

  switch (action.type){
    case CategoryActions.GET_CATEGORIES:
      return{
        ...state
      }

    default:
      return state;
  }
}
