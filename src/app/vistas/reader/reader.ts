import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reader.html',
  styleUrls: ['./reader.css']
})
export class reader{
  public bookId: string | null = '';
  public bookTitle: string = 'Cargando libro...';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.bookTitle = "Leyendo Libro ID: " + this.bookId;
  }
}
