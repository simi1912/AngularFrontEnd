import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthComponent} from "./auth/auth.component";
import {CartComponent} from "./cart/cart.component";
import {AboutComponent} from "./about/about.component";
import {MenuItemComponent} from "./menu/menu-item/menu-item.component";
import {AuthGuard} from "./auth/AuthGuard";
import {DeliveryInformationComponent} from "./cart/delivery-information/delivery-information.component";
import {DeliveryInfoGuard} from "./cart/DeliveryInfoGuard";

const appRoutes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'menu', children: [
      {path: '', component: MenuComponent},
      {path: ':id', component: MenuItemComponent}
    ]
  },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'login', component: AuthComponent},
  {path: 'signup', component: AuthComponent},
  {path: 'logout', component: AuthComponent},
  {path: 'cart', children: [
      {path: '', component: CartComponent},
      {path: 'deliveryInfo', component: DeliveryInformationComponent, canActivate: [DeliveryInfoGuard]}
    ]
  },
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
