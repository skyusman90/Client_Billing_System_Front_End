import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpendituresComponent } from './update-expenditures.component';

describe('UpdateExpendituresComponent', () => {
  let component: UpdateExpendituresComponent;
  let fixture: ComponentFixture<UpdateExpendituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateExpendituresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateExpendituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
