import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowOrgandonationComponent } from './know-organdonation.component';

describe('KnowOrgandonationComponent', () => {
  let component: KnowOrgandonationComponent;
  let fixture: ComponentFixture<KnowOrgandonationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowOrgandonationComponent]
    });
    fixture = TestBed.createComponent(KnowOrgandonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
