import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPropietarioComponent } from './perfil-propietario.component';

describe('PerfilPropietarioComponent', () => {
  let component: PerfilPropietarioComponent;
  let fixture: ComponentFixture<PerfilPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
