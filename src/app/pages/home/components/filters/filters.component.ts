import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: "app-filters",
  standalone: true,
  imports: [MatExpansionModule, CommonModule, MatListModule],
  templateUrl: "./filters.component.html",
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] = ["Shoes", "Sports"];

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
