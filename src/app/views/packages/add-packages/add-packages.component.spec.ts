import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackagesComponent } from './add-packages.component';

describe('AddPackagesComponent', () => {
  let component: AddPackagesComponent;
  let fixture: ComponentFixture<AddPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
