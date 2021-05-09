import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRealComponent } from './perfil-real.component';

describe('PerfilRealComponent', () => {
  let component: PerfilRealComponent;
  let fixture: ComponentFixture<PerfilRealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilRealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
