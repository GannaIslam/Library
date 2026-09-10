import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [RouterLink],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {

  @Input() id = 0;
  @Input() title = '';
  @Input() author = '';
  @Input() readingTime = '';
  @Input() tags: string[] = [];
  @Input() coverLines: string[] = [];
  @Input() coverClass = '';
  @Input() bookImage = '';
}