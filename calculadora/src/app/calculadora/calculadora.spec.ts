import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calculadora } from './calculadora';

describe('Calculadora', () => {
  let component: Calculadora;
  let fixture: ComponentFixture<Calculadora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculadora],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculadora);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it.each([
    ['+', '2', '3', '5'],
    ['-', '2', '3', '-1'],
    ['*', '4', '3', '12'],
    ['/', '9', '2', '4.5'],
  ] as const)('calculates %s', (operacion, primero, segundo, esperado) => {
    component.escribir(primero);
    component.elegirOperacion(operacion);
    component.escribir(segundo);
    component.calcular();
    expect(component.pantalla()).toBe(esperado);
  });

  it('handles decimal input without duplicate decimal points', () => {
    component.escribir('.');
    component.escribir('1');
    component.escribir('.');
    component.elegirOperacion('+');
    component.escribir('.');
    component.escribir('2');
    component.calcular();
    expect(component.pantalla()).toBe('0.3');
  });

  it('reports division by zero and accepts a new calculation', () => {
    component.escribir('9');
    component.elegirOperacion('/');
    component.escribir('0');
    component.calcular();
    expect(component.mensaje()).toContain('cero');
    component.escribir('2');
    expect(component.mensaje()).toBe('');
    expect(component.pantalla()).toBe('2');
  });

  it('clears the pending operation', () => {
    component.escribir('9');
    component.elegirOperacion('+');
    component.borrar();
    expect(component.pantalla()).toBe('0');
    expect(component.operacion()).toBeNull();
  });

  it('renders the result after pressing buttons', async () => {
    const element = fixture.nativeElement as HTMLElement;
    const press = (label: string) => {
      const button = Array.from(element.querySelectorAll('button')).find(
        item => item.textContent?.trim() === label,
      );
      expect(button).toBeDefined();
      button!.click();
    };
    press('2');
    press('+');
    press('3');
    press('=');
    await fixture.whenStable();
    expect(element.querySelector('output')?.textContent).toBe('5');
  });
});
