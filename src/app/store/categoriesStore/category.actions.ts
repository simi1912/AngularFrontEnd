import {Action} from "@ngrx/store";
import {Category} from "../models/category.model";

export const GET_CATEGORIES:string = "Categories get categories"

export class GetCategories implements Action{
  readonly type = GET_CATEGORIES;

  constructor(public payload: Category[]) {}
}

export type CategoriesActions =
  GetCategories;
