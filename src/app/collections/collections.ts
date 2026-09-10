import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './collections.html',
  styleUrls: ['./collections.css']
})
export class CollectionsComponent {
  showFilter = false;
  selectedCategory = 'All';
  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.showFilter = false;
  }
}