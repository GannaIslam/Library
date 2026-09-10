import { Component, EventEmitter, Output } from '@angular/core';

export interface FilterValues {
  genre: string;
  mood: string;
  readingTime: string;
}

@Component({
  selector: 'app-filter-bar',
  imports: [],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css',
})
export class FilterBar {

  @Output() search = new EventEmitter<FilterValues>();

  genre = '';
  mood = '';
  readingTime = '';

  onSearch() {

    this.search.emit({
      genre: this.genre,
      mood: this.mood,
      readingTime: this.readingTime
    });

  }
}