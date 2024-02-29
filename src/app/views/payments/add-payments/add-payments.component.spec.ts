import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentsComponent } from './add-payments.component';

describe('AddPaymentsComponent', () => {
  let component: AddPaymentsComponent;
  let fixture: ComponentFixture<AddPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
