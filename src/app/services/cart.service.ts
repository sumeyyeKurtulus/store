import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ICart, ICartItem } from "../models/cart.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CartService {
  public cart: BehaviorSubject<ICart> = new BehaviorSubject<ICart>({
    items: [],
  });

  constructor(private _snackBar: MatSnackBar) {}

  // public cart$(): Observable<ICart> {
  //   return this._cart.asObservable();
  // }

  addToCart(item: ICartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open("1 item is added to the cart", "OK", {
      duration: 3000,
    });
  }

  getTotal(items: Array<ICartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }

  emptyCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open("Cart is cleared.", "OK", {
      duration: 3000,
    });
  }

  removeFromCart(item: ICartItem): void {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );
    this.cart.next({ items: filteredItems });
    this._snackBar.open("Items are removed from the cart", "OK", {
      duration: 3000,
    });
  }

  removeQuantity(item: ICartItem): void {
    let itemForRemoval: ICartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }
      return _item;
    });

    if (itemForRemoval) {
      this.removeFromCart(itemForRemoval);
    } else {
      this.cart.next({ items: filteredItems });
    }

    this._snackBar.open("Items are removed from the cart", "OK", {
      duration: 3000,
    });
  }
}
