import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { foods } from '../api/foods';
import { Router, RouterLink } from '@angular/router';
import { Foods } from '../../model/food';
import { filters } from '../api/filters';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  isFilterModalOpen = false;

  foods:Foods[]=foods;

  filterss: any[]=filters;

  filteredCards = [...this.foods]; // Start by displaying all cards
  isMenuOpen: any = false;

  constructor(private router: Router) {}

  toggleFilterModal() {
    this.isFilterModalOpen = !this.isFilterModalOpen;
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Apply a filter
  applyFilter(filter: any) {
    // Reset other filters and activate the selected one
    this.filterss.forEach((f: any) => (f.active = false));
    filter.active = true;

    if(filter.name === 'All') {
      this.filteredCards = [...this.foods]
    }
    else
    {
      this.filteredCards = this.foods.filter((food) => food.groupTitle === filter.name);
    }
  }

  // Reset all filters
  resetFilters() {
    this.filterss.forEach((f: any) => (f.active = false));
    this.filteredCards = [...this.foods];
  }

  // currently selected category filter
  selectedCategory: string | null = null;

  // method to check if a product is visible based on the filter
  isVisible(filter: any): boolean {
    return !this.selectedCategory || filter.name === this.selectedCategory;
  }
}
