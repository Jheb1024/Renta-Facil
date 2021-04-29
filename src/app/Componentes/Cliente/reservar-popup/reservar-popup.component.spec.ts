import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarPopupComponent } from './reservar-popup.component';

describe('ReservarPopupComponent', () => {
  let component: ReservarPopupComponent;
  let fixture: ComponentFixture<ReservarPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
