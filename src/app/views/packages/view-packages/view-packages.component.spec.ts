import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPackagesComponent } from './view-packages.component';

describe('ViewPackagesComponent', () => {
  let component: ViewPackagesComponent;
  let fixture: ComponentFixture<ViewPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
