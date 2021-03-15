import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsvaldoComponent } from './osvaldo.component';

describe('OsvaldoComponent', () => {
  let component: OsvaldoComponent;
  let fixture: ComponentFixture<OsvaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsvaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsvaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
