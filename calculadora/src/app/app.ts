import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculadoraComponent],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}