import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './library.html',
  styleUrls: ['./library.css']
})
export class library {
  public myBooks = [
    { id: 1, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', cover_image: '' },
    { id: 3, title: 'Orgullo y Prejuicio', author: 'Jane Austen', cover_image: '' }
  ];
}
