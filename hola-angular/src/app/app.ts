import { Component, signal } from '@angular/core'; //Importación de decorador y señal de Angular

@Component({//Decorador de componente
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly nombre = signal('Angular');
  readonly contador = signal(0);
  incrementar(): void {
    this.contador.update(valor => valor + 1);
    }
  reiniciar(): void {
    this.contador.set(0);
  }
}