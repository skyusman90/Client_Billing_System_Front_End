import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpendituresComponent } from './view-expenditures.component';

describe('ViewExpendituresComponent', () => {
  let component: ViewExpendituresComponent;
  let fixture: ComponentFixture<ViewExpendituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewExpendituresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewExpendituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
