import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ProductsHeaderComponent } from "./components/products-header/products-header.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { ProductBoxComponent } from "./components/product-box/product-box.component";

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
  ],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  public cols: number = 3;
  public rowHeight: number = ROWS_HEIGHT[this.cols];
  public category: string | undefined;

  onColumnsCountChange(colNumber: number): void {
    this.cols = colNumber;
    this.rowHeight = ROWS_HEIGHT[colNumber];
  }

  onShowCategory(category: string): void {
    this.category = category;
  }
}
