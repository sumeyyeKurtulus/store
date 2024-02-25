import { CurrencyPipe } from "@angular/common";
import { Component } from "@angular/core";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbar } from "@angular/material/toolbar";
import { RouterLink } from "@angular/router";

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
  ],
  templateUrl: "./header.component.html",
  styles: ``,
})
export class HeaderComponent {}
