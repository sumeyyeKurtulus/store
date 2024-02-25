import { CommonModule, CurrencyPipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbar } from "@angular/material/toolbar";
import { RouterLink } from "@angular/router";
import { ICart, ICartItem } from "../../models/cart.model";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    MatToolbar,
    RouterLink,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatMenuModule,
    CurrencyPipe,
    CommonModule,
  ],
  templateUrl: "./header.component.html",
  styles: ``,
})
export class HeaderComponent {
  private _cart: ICart = { items: [] };
  public itemsQuantity: number = 0;

  @Input()
  get cart(): ICart {
    return this._cart;
  }

  set cart(cart: ICart) {
    this._cart = cart;
    this.itemsQuantity = this._cart.items
      .map((item) => item.quantity)
      .reduce((previous, current) => previous + current, 0);
  }

  constructor(private _cartService: CartService) {}

  getTotal(items: Array<ICartItem>): number {
    return this._cartService.getTotal(items);
  }

  emptyCart(): void {
    this._cartService.emptyCart();
  }
}
