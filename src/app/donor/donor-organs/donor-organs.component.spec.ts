import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorOrgansComponent } from './donor-organs.component';

describe('DonorOrgansComponent', () => {
  let component: DonorOrgansComponent;
  let fixture: ComponentFixture<DonorOrgansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorOrgansComponent]
    });
    fixture = TestBed.createComponent(DonorOrgansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
