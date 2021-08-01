import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import * as fromApp from "../store/app.reducer";
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DeliveryInfoGuard implements CanActivate{

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select("cartState").pipe(
      take(1),
      map( cartState => {
        if(cartState.cart.cartItems.length > 0)
          return true
        else
          return this.router.createUrlTree(['/menu']);
      })
    );
  }



}
