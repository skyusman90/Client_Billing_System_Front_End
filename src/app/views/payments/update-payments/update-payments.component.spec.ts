import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentsComponent } from './update-payments.component';

describe('UpdatePaymentsComponent', () => {
  let component: UpdatePaymentsComponent;
  let fixture: ComponentFixture<UpdatePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
