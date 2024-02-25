import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ProductsHeaderComponent } from "./components/products-header/products-header.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { ProductBoxComponent } from "./components/product-box/product-box.component";
import { IProduct } from "../../models/product.model";
import { CartService } from "../../services/cart.service";
import { Subscription } from "rxjs";
import { StoreService } from "../../services/store.service";
import { CommonModule } from "@angular/common";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 450 };

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    ProductsHeaderComponent,
    ProductBoxComponent,
    FiltersComponent,
    MatSidenavModule,
    MatGridListModule,
    CommonModule,
  ],
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy {
  public cols: number = 3;
  public rowHeight: number = ROWS_HEIGHT[this.cols];
  public category: string | undefined;

  public products: Array<IProduct> | undefined;
  public sort = "desc";
  public count = "12";
  public productSubscription: Subscription | undefined;

  constructor(
    private _cartService: CartService,
    private _storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      //Prevent memory leaks
      this.productSubscription.unsubscribe();
    }
  }

  getProducts(): void {
    this.productSubscription = this._storeService
      .getAllProducts(this.count, this.sort)
      .subscribe((_products) => {
        this.products = _products;
      });
  }

  onColumnsCountChange(colNumber: number): void {
    this.cols = colNumber;
    this.rowHeight = ROWS_HEIGHT[colNumber];
  }

  onShowCategory(category: string): void {
    this.category = category;
  }

  onAddToCart(product: IProduct): void {
    this._cartService.addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      product: product.image,
      quantity: 1,
    });
  }
}
