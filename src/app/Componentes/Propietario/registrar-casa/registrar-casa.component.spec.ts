import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCasaComponent } from './registrar-casa.component';

describe('RegistrarCasaComponent', () => {
  let component: RegistrarCasaComponent;
  let fixture: ComponentFixture<RegistrarCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarCasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
