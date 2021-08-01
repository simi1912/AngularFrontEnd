import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../store/models/menuItem.model";
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {FetchMenu} from "../store/menuItemStore/menu.actions";
import {AddToCart} from "../store/cartStore/cart.actions";

import * as fromApp from "../store/app.reducer";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../store/models/category.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];
  categories: Category[] = [];
  categoryQuery = "";
  isCategoryFilterVisible = false;

  constructor(private store: Store<fromApp.AppState>,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(){
    this.route.queryParams.subscribe( params => {
      let nameQueryParam = params['name'];
      let nameDescriptionParam = params['description'];
      let categoryQueryParam = params['category'];

      this.store.dispatch(new FetchMenu({
        name: nameQueryParam,
        description: nameDescriptionParam,
        category: categoryQueryParam
      }));
    });

    this.store.select("menuState")
      .pipe(
        map( menuItemState =>{
          return menuItemState.menuItems;
        })
      )
      .subscribe(menuItems =>
        this.menuItems = menuItems
      );

    this.store.select("categoryState")
      .subscribe(categoryState =>
        this.categories = categoryState.categories
      );

  }

  addToCart(menuItem: MenuItem) {
    this.store.dispatch(new AddToCart({
      cartItem: {
          menuItem: menuItem,
          quantity: 1
        }
      })
    );
  }

  onSearch($event: Event, searchQuery: string) {
    $event.preventDefault();

    if (searchQuery.length > 0){
      this.router.navigate(['/menu'], {
        queryParams: {
          name: searchQuery,
          description: searchQuery
        }
      });
    }
  }

  addCategoryFilter(category: Category, isChecked: boolean) {
    if(isChecked)
      this.categoryQuery = `${this.categoryQuery},${category.name}`
    else
      this.categoryQuery = this.categoryQuery.replace(
        `,${category.name}`, "");

    this.router.navigate(['/menu'], {
      queryParams: {
        category: this.categoryQuery.substr(1)
      }
    });
  }
}
