import { Injectable } from '@angular/core';


export interface CartItem {
  id: number;
  title: string;
  author: string;
  bookImage: string;
  tags: string;
  reference: string;
  description: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private books: CartItem[] = [];

  getBooks(): CartItem[] {
    return this.books;
  }

  addToCart(book: any): void {
    const existingBook = this.books.find(b => b.id === book.id);

    if (existingBook) {
      existingBook.quantity++;
    } else {
      this.books.push({
        ...book,
        quantity:1,
        price:book.price||350
      });
    }
  }

  increaseQuantity(id: number) {
    const book = this.books.find(book => book.id === id);

    if (book) {
      book.quantity++;
    }
  }

  decreaseQuantity(id: number) {
    const book = this.books.find(book => book.id === id);

    if (book && book.quantity > 1) {
      book.quantity--;
    }
  }

  removeBook(id: number) {
    this.books = this.books.filter(book => book.id !== id);
  }

  getSubtotal() {
    return this.books.reduce(
      (total, book) => total + book.price * book.quantity,
      0
    );
  }

  getTotal() {
    return this.getSubtotal() + 45 + 15;
  }
  
}