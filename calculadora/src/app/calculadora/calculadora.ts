import { Component, signal } from '@angular/core';

type Operacion = '+' | '-' | '*' | '/';

@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  readonly pantalla = signal('0');
  readonly operacion = signal<Operacion | null>(null);
  readonly mensaje = signal('');
  private anterior = 0;
  private nuevaEntrada = true;

  escribir(digito: string): void {
    this.mensaje.set('');
    if (this.nuevaEntrada) {
      this.pantalla.set(digito === '.' ? '0.' : digito);
      this.nuevaEntrada = false;
      return;
    }
    if (digito === '.' && this.pantalla().includes('.')) return;
    if (this.pantalla().length >= 12) return;
    this.pantalla.update(valor => valor === '0' && digito !== '.' ? digito : valor + digito);
  }

  elegirOperacion(operacion: Operacion): void {
    if (this.mensaje()) return;
    if (this.operacion() && !this.nuevaEntrada) {
      this.calcular();
      if (this.mensaje()) return;
    }
    this.anterior = Number(this.pantalla());
    this.operacion.set(operacion);
    this.nuevaEntrada = true;
  }

  calcular(): void {
    const operacion = this.operacion();
    if (!operacion || this.nuevaEntrada) return;
    const actual = Number(this.pantalla());
    let resultado: number;

    switch (operacion) {
      case '+': resultado = this.anterior + actual; break;
      case '-': resultado = this.anterior - actual; break;
      case '*': resultado = this.anterior * actual; break;
      case '/':
        if (actual === 0) {
          this.borrar();
          this.mensaje.set('No se puede dividir entre cero.');
          return;
        }
        resultado = this.anterior / actual;
        break;
    }

    this.operacion.set(null);
    this.nuevaEntrada = true;
    if (!Number.isFinite(resultado)) {
      this.pantalla.set('0');
      this.mensaje.set('El resultado es demasiado grande.');
      return;
    }
    this.pantalla.set(String(Number(resultado.toPrecision(12))));
  }

  borrar(): void {
    this.pantalla.set('0');
    this.operacion.set(null);
    this.mensaje.set('');
    this.anterior = 0;
    this.nuevaEntrada = true;
  }
}
