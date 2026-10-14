import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  readonly pantalla = signal('0');
  readonly mensaje = signal('');
  readonly operacion = signal<string | null>(null);

  private valorAnterior: number | null = null;
  private limpiarPantalla = false;

  escribir(caracter: string): void {
    this.mensaje.set('');
    if (caracter === '.' && this.pantalla().includes('.')) return;

    if (this.pantalla() === '0' && caracter !== '.') {
      this.pantalla.set(caracter);
    } else if (this.limpiarPantalla) {
      this.pantalla.set(caracter);
      this.limpiarPantalla = false;
    } else {
      this.pantalla.set(this.pantalla() + caracter);
    }
  }

  elegirOperacion(op: string): void {
    this.valorAnterior = parseFloat(this.pantalla());
    this.operacion.set(op);
    this.limpiarPantalla = true;
  }

  calcular(): void {
    if (this.operacion() === null || this.valorAnterior === null) return;

    const valorActual = parseFloat(this.pantalla());
    let res = 0;

    switch (this.operacion()) {
      case '+':
        res = this.valorAnterior + valorActual;
        break;
      case '-':
        res = this.valorAnterior - valorActual;
        break;
      case '*':
        res = this.valorAnterior * valorActual;
        break;
      case '/':
        if (valorActual === 0) {
          this.mensaje.set('Error: División por cero');
          this.operacion.set(null);
          return;
        }
        res = this.valorAnterior / valorActual;
        break;
    }

    this.pantalla.set(String(res));
    this.operacion.set(null);
    this.valorAnterior = null;
    this.limpiarPantalla = true;
  }

  borrar(): void {
    this.pantalla.set('0');
    this.operacion.set(null);
    this.valorAnterior = null;
    this.mensaje.set('');
  }
}