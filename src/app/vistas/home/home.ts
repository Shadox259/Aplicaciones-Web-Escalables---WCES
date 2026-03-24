import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class home {
  public searchTerm: string = '';
  public isLoggedIn: boolean = false;
  
  public featuredBooks = [
    { id: 1, title: '1984', author: 'George Orwell', price: 10.99, cover_image: '' },
    { id: 2, title: 'El Hobbit', author: 'J.R.R. Tolkien', price: 15.50, cover_image: '' }
  ];

  public searchBooks(): void {
    console.log('Buscando:', this.searchTerm);
  }

  public addToCart(id: number): void {
    alert('Añadido al carrito el libro ID: ' + id);
  }
}