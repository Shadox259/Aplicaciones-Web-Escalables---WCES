import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html'
})
export class login {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}

  public handleLogin(): void {
    if (this.loginForm.valid) {
      console.log('Datos del formulario:', this.loginForm.value);
      this.router.navigate(['/home']);
    } else {
      alert('Por favor, rellena todos los campos correctamente.');
    }
  }
}