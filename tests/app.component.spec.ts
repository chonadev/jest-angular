import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // test(`should have as title 'jest-angular'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const component = fixture.componentInstance;
  //   expect(component.title).toEqual('jest-angular');
  // });

  // test('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const h1 = compiled.querySelector('h1');
  //   expect(h1?.textContent).toContain(component.title);
  // });

  // test('debe hacer match con el snapshot', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const component = fixture.componentInstance;

  //   expect( component ).toMatchSnapshot();

  // });
});
