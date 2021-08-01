import {Category} from "./category.model";

export class MenuItem{

  constructor(
    public id: number,
    public category: Category,
    public image: string,
    public name: string,
    public description: string,
    public price: number
  ) {}

}
