import { Component, OnInit } from '@angular/core';
import {Category} from "../store/models/category.model";
import {Store} from "@ngrx/store";

import * as fromApp from "../store/app.reducer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories:Category[];

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) { }

  ngOnInit(): void {
    this.store.select("categoryState").subscribe(categoryState =>{
      this.categories = categoryState.categories;
    })
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
}
