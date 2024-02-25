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
  @Input() product: IProduct | undefined;
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
