import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class admin {
  public showForm: boolean = false;
  public isEditing: boolean = false;

  public bookForm = new FormGroup({
    id: new FormControl<number | null>(null),
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    price: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    genre: new FormControl('', [Validators.required]),
    cover_image: new FormControl('')
  });

  public books = [
    { id: 1, title: '1984', author: 'George Orwell', price: 10.99, genre: 'Ciencia Ficción' },
    { id: 2, title: 'El Hobbit', author: 'J.R.R. Tolkien', price: 15.50, genre: 'Fantasía' }
  ];

  public openAddForm(): void {
    this.isEditing = false;
    this.bookForm.reset({ id: null, title: '', author: '', price: 0, genre: '', cover_image: '' });
    this.showForm = true;
  }

  public openEditForm(book: any): void {
    this.isEditing = true;
    this.bookForm.setValue({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      genre: book.genre || '',
      cover_image: book.cover_image || ''
    });
    this.showForm = true;
  }

  public saveBook(): void {
    if (this.bookForm.valid) {
      const formValues = this.bookForm.value;
      
      if (this.isEditing) {
        const index = this.books.findIndex(b => b.id === formValues.id);
        if (index !== -1) {
          this.books[index] = formValues as any;
          alert('Libro actualizado correctamente');
        }
      } else {
        const newBook = { ...formValues, id: Date.now() };
        this.books.push(newBook as any);
        alert('Libro creado correctamente');
      }
      
      this.showForm = false;
    } else {
      alert('Por favor, completa todos los campos obligatorios');
    }
  }

  public deleteBook(id: number): void {
    if (confirm('¿Estás seguro de eliminar este libro?')) {
      this.books = this.books.filter(b => b.id !== id);
    }
  }
}