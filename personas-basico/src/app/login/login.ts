<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {}
=======

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario = '';
  clave = '';
  sesionIniciada = false;

  iniciarSesion() {
    if (this.usuario === 'admin' && this.clave === '123456') {
      localStorage.setItem('sesionBasica', 'si');
      this.sesionIniciada = true;
      this.clave = '';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  cerrarSesion() {
    localStorage.removeItem('sesionBasica');
    this.sesionIniciada = false;
    this.usuario = '';
    this.clave = '';
  }
}
>>>>>>> c651d7bfa34c8b921a8df99d4dfc4375e697e0f8
