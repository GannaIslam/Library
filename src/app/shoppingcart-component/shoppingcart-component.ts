import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService,CartItem } from '../cart-services/cart-services';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shoppingcart-component',
  imports: [CommonModule],
  templateUrl: './shoppingcart-component.html',
  styleUrl: './shoppingcart-component.css',
})
export class ShoppingcartComponent {
  
  constructor(private CartService:CartService,
    private router: Router
  ){}
   get books(): CartItem[] {
    return this.CartService.getBooks();
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
  goToPayment(){
    this.router.navigate(['/payment'])
  }
  }


