import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class profile {
  public profileForm = new FormGroup({
    name: new FormControl('Usuario de Prueba', [Validators.required]),
    email: new FormControl({ value: 'correo@ejemplo.com', disabled: true }),
    newPassword: new FormControl('', [Validators.minLength(6)]),
    confirmPassword: new FormControl('')
  });

  public updateProfile(): void {
    if (this.profileForm.valid) {
      const datos = this.profileForm.getRawValue();
      
      if (datos.newPassword !== datos.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      console.log('Actualizando perfil...', datos);
      alert('Cambios guardados con éxito');
    }
  }

  public deleteAccount(): void {
    if (confirm('¿Estás seguro?')) {
      console.log('Cuenta eliminada');
    }
  }
}