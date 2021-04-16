import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPropietarioComponent } from './catalogo-propietario.component';

describe('CatalogoPropietarioComponent', () => {
  let component: CatalogoPropietarioComponent;
  let fixture: ComponentFixture<CatalogoPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
