import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {MenuItem} from "../../store/models/menuItem.model";
import {FetchMenu} from "../../store/menuItemStore/menu.actions";
import {AddToCart} from "../../store/cartStore/cart.actions";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  id: number;
  menuItem: MenuItem;

  constructor(private route: ActivatedRoute,
              private menuStore: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.menuStore.dispatch(new FetchMenu({}));

    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.menuStore.select("menuState")
      .pipe(
        map(menuItemState => menuItemState.menuItems )
      )
      .subscribe(menuItems => {
        this.menuItem = menuItems.find( menuItem => menuItem.id == this.id );
      });
  }

  addToCart(menuItem: MenuItem) {
    this.menuStore.dispatch(new AddToCart({
      cartItem: {
          menuItem: menuItem,
          quantity: 1
        }
      })
    );
  }

}
