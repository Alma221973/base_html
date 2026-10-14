import { Component, signal } from '@angular/core';
import { Calculadora } from './calculadora/calculadora';

@Component({
  imports: [Calculadora],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly contador = signal(0);

  incrementar(): void {
    this.contador.update(valor => valor + 1);
  }

  reiniciar(): void {
    this.contador.set(0);
  }
}
