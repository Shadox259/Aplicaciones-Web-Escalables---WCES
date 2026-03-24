import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css']
})
export class catalog {
  public search: string = '';
  
  public allBooks = [
    { id: 1, title: '1984', author: 'George Orwell', price: 10.99, genre: 'Ciencia Ficción', cover_image: '' },
    { id: 2, title: 'El Hobbit', author: 'J.R.R. Tolkien', price: 11.99, genre: 'Fantasía', cover_image: '' },
    { id: 3, title: 'Orgullo y Prejuicio', author: 'Jane Austen', price: 7.99, genre: 'Romance', cover_image: '' }
  ];

  public addToCart(id: number): void {
    alert('Añadido al carrito: ' + id);
  }
}