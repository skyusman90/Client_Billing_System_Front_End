import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePackagesComponent } from './update-packages.component';

describe('UpdatePackagesComponent', () => {
  let component: UpdatePackagesComponent;
  let fixture: ComponentFixture<UpdatePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
