import {MenuItem} from "../models/menuItem.model";

import * as MenuActions from "./menu.actions";

export  interface State{
  menuItems: MenuItem[];
}

const initialState: State = {
  menuItems: []
}


const menuItems: MenuItem[] = [
  {
    id: 1,
    category: {
      id: 2,
      name: 'burger',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    image: "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    name: 'Soup 1',
    description: 'Delicious soup 1',
    price: 3.99
  },
  {
    id: 2,
    category: {
      id: 1,
      name: 'soup',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    image: "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    name: 'Soup 2',
    description: 'Delicious soup 2',
    price: 4.99
  },
  {
    id: 2,
    category: {
      id: 1,
      name: 'soup',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    image: "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    name: 'Soup 2',
    description: 'Delicious soup 2',
    price: 4.99
  },
  {
    id: 2,
    category: {
      id: 1,
      name: 'soup',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    image: "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    name: 'Soup 2',
    description: 'Delicious soup 2',
    price: 4.99
  },
  {
    id: 2,
    category: {
      id: 1,
      name: 'soup',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    image: "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    name: 'Soup 2',
    description: 'Delicious soup 2',
    price: 4.99
  },
  {
    id: 2,
    category: {
      id: 1,
      name: 'soup',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    image: "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    name: 'Soup 2',
    description: 'Delicious soup 2',
    price: 4.99
  },
  {
    id: 2,
    category: {
      id: 1,
      name: 'soup',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    image: "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    name: 'Soup 2',
    description: 'Delicious soup 2',
    price: 4.99
  },
  {
    id: 2,
    category: {
      id: 1,
      name: 'soup',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    image: "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    name: 'Soup 2',
    description: 'Delicious soup 2',
    price: 4.99
  },
  {
    id: 2,
    category: {
      id: 1,
      name: 'soup',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    image: "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    name: 'Soup 2',
    description: 'Delicious soup 2',
    price: 4.99
  },
  {
    id: 2,
    category: {
      id: 1,
      name: 'soup',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
    },
    image: "https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    name: 'Soup 2',
    description: 'Delicious soup 2',
    price: 4.99
  },
];

export function menuReducer (state = initialState,
                             action: MenuActions.MenuActions){

  switch (action.type){
    case MenuActions.SET_MENU:
      return{
        ...state,
        menuItems: [...action.payload]
      };

    case MenuActions.FETCH_MENU:
      let filteredMenuItems = menuItems.slice();
      filteredMenuItems = filterByName(filteredMenuItems, action.payload.name, action.payload.description);
      filteredMenuItems = filterByCategory(filteredMenuItems, action.payload.category);
      return {
        ...state,
        menuItems: [...filteredMenuItems]
      }

    default:
      return state;
  }

}

function filterByName(filteredMenuItems: MenuItem[], name: string, description: string): MenuItem[] {
  if(name && name.length > 0){
    if(description && description.length > 0)
      return filteredMenuItems.filter( menuItem =>
        menuItem.name.includes(name) || menuItem.description.includes(description));
    else
      return filteredMenuItems.filter( menuItem => menuItem.name.includes(name));
  } else {
    return filteredMenuItems;
  }
}

function filterByCategory(filteredMenuItems: MenuItem[], category: string): MenuItem[]{
  if(category && category.length > 0){
    return filteredMenuItems.filter( menuItems => {
      return category.includes(menuItems.category.name);
    })
  } else {
    return filteredMenuItems;
  }

}


