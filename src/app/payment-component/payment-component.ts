import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-services/cart-services';

@Component({
  selector: 'app-payment-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-component.html',
  styleUrl: './payment-component.css',
})
export class PaymentComponent {
  cardHolder: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  saveCard: boolean = false;

  isSubmitted: boolean = false;
  books;
  constructor(private router:Router,private CartService:CartService){
    {
    this.books=this.CartService.getBooks()
  }
  }
  ProcessPayment(){
    if (this.cardHolder && this.cardNumber && this.expiryDate && this.cvv) {
      this.isSubmitted = true;
    } else {
      alert('Please fill in all payment details.');
    }
  }
  ReturnToCart(){
    this.router.navigate(['/cart']);
  }
  
  increaseQuantity(id: number){
    this.CartService.increaseQuantity(id)
  }
  decreaseQuantity(id: number){
    this.CartService.decreaseQuantity(id)
  }
  removeBook(id: number){
    this.CartService.removeBook(id)
  }
  getSubtotal(){
    return this.CartService.getSubtotal();
  }
  getTotal(){
    return this.CartService.getTotal();
  }
  }

