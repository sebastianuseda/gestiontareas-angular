import { Component, inject } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  router?: Router;
  autenticacionContraseña = 'CONTRASEÑA123';
  

  constructor(private authService: AuthService, private _router: Router) {
    this.router = _router;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return "Field must not be empty"
    }

    return this.email.hasError('email') ? 'Invalid email' : '';
  }
  login() {
    const email = this.email.value!;
    const password = this.password.value!;

    if (password === this.autenticacionContraseña) {
      this.authService.login(email, password);
      this.router?.navigate(['']);
    } else {
      console.log('Contraseña incorrecta. No se puede autenticar.');
    }
  }

}
