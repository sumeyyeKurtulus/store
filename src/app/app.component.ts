import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./pages/home/home.component";
import { CartComponent } from "./pages/cart/cart.component";
import { CartService } from "./services/cart.service";
import { ICart } from "./models/cart.model";
import { StoreService } from "./services/store.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    CartComponent,
    RouterOutlet,
    CommonModule,
    HttpClientModule,
  ],
  template: ` <app-header [cart]="cart"></app-header
    ><router-outlet></router-outlet>`,
  styles: [],
  providers: [CartService, StoreService],
})
export class AppComponent implements OnInit {
  cart: ICart = { items: [] };

  constructor(private _cartService: CartService) {}
  ngOnInit(): void {
    this._cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
