import { Component, OnInit } from "@angular/core";
import { ICart, ICartItem } from "../../models/cart.model";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  public cart: ICart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "Sneakers",
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Sneakers",
        price: 150,
        quantity: 3,
        id: 1,
      },
    ],
  };

  dataSource: Array<ICartItem> = [];
  displayedCols: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<ICartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }
}
