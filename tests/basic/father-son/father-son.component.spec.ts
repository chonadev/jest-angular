import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer match con el snapshot', () => {
    expect( compiled ).toMatchSnapshot();
  });

  test('no deben de aparecer botones si no hay cliente', () => {
    const buttons = compiled.querySelectorAll('button');
    expect( buttons?.length ).toBe(0);
  });

  test('deben de aparecer 2 botones si hay cliente', () => {
    component.client = { id: 1, name: 'pepe' };
    fixture.detectChanges();
    const buttons = compiled.querySelectorAll('button');
    expect( buttons?.length ).toBe(2);
  });

  test('si hay cliente hacer match con el snapshot', () => {
    component.client = { id: 1, name: 'pepe' };
    fixture.detectChanges();
    expect( compiled ).toMatchSnapshot();
  });

  test('debe de emitir onDeleteClient con el boton de eliminar', () => {
    component.client = { id: 1, name: 'pepe' };
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient, 'emit');

    const btnDelete = compiled.querySelector('[data-test=btn-delete]');
    
    btnDelete?.dispatchEvent(new Event('click'));

    expect( component.onDeleteClient.emit ).toHaveBeenCalled();
    
  });

  test('debe de emitir onClientUpdated con el boton de "cambiar ID" ', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    jest.spyOn(component.onClientUpdated, 'emit');

    const btnChangeId = compiled.querySelector('[data-test=btn-id]');
    
    btnChangeId?.dispatchEvent(new Event('click'));

    expect( component.onClientUpdated.emit ).toHaveBeenCalledWith({
      id: 5,
      name: 'Juan'
    });
    
  });

  test('debe emitir onChangeClient con el id especificado Si hay un cliente', () => {
    jest.spyOn( component.onClientUpdated, 'emit' );
    component.onChange(10);
    expect( component.onClientUpdated.emit ).not.toHaveBeenCalled();

    component.client = { id: 1, name: 'pepe' };
    fixture.detectChanges();
    component.onChange(11);

    expect( component.onClientUpdated.emit ).toHaveBeenCalledWith({
      id: 11,
      name: 'pepe'
    });

  });

});
