import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtenderReservacionComponent } from './extender-reservacion.component';

describe('ExtenderReservacionComponent', () => {
  let component: ExtenderReservacionComponent;
  let fixture: ComponentFixture<ExtenderReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtenderReservacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtenderReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
