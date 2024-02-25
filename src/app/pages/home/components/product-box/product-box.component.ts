import { CommonModule, CurrencyPipe } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { IProduct } from "../../../../models/product.model";

@Component({
  selector: "app-product-box",
  standalone: true,
  imports: [MatCardModule, CurrencyPipe, MatIconModule, CommonModule],
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent {
  @Input() fullWidthMode: boolean = false;
  @Output() addToCart = new EventEmitter();

  public product: IProduct | undefined = {
    id: 1,
    title: "Sneakers",
    price: 150,
    category: "shoes",
    description: "Description",
    image: "https://via.placeholder.com/150",
  };

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
