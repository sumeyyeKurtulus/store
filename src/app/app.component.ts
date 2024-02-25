import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from "@angular/common";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HomeComponent } from "./pages/home/home.component";
import { CartComponent } from "./pages/cart/cart.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    CartComponent,
    RouterOutlet,
    CommonModule,
  ],
  template: ` <app-header></app-header><router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent {
  title = "store";
}
