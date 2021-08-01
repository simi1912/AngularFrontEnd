import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import * as fromApp from "../store/app.reducer";
import {map, take} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select('authState').pipe(
      take(1),
      map(authState => {
        if(authState.isAuth)
          return true;
        else
          return this.router.createUrlTree(['/login']);
      })
    );
  }

}
