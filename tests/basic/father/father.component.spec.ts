import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from '../../../src/app/basic/father/father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherComponent);
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

});
