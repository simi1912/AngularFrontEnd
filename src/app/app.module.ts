import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from "./store/app.reducer";
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DeliveryInformationComponent } from './cart/delivery-information/delivery-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ProfileComponent,
    AuthComponent,
    CartComponent,
    AboutComponent,
    MenuItemComponent,
    DeliveryInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
