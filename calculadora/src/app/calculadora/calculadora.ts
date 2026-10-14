import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class CalculadoraComponent {
  readonly a = signal<number | null>(null);
  readonly b = signal<number | null>(null);
  readonly resultado = signal<number | string>(0);

  calcular(operacion: string): void {
    const valA = Number(this.a()) || 0;
    const valB = Number(this.b()) || 0;
    let res: number | string = 0;

    switch (operacion) {
      case '+': res = valA + valB; break;
      case '-': res = valA - valB; break;
      case '*': res = valA * valB; break;
      case '/': 
        res = valB !== 0 ? valA / valB : 'Error: División por cero'; 
        break;
    }
    this.resultado.set(res);
  }
}