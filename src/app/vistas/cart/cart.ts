import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class cart {
  public cartItems = [
    { id: 1, title: '1984', author: 'George Orwell', price: 10.99, quantity: 1, cover_image: '' },
    { id: 2, title: 'El Hobbit', author: 'J.R.R. Tolkien', price: 15.50, quantity: 1, cover_image: '' }
  ];

  get total(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  public removeItem(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  public checkout(): void {
    alert('Procesando pago por: $' + this.total.toFixed(2));
    this.cartItems = [];
  }
}