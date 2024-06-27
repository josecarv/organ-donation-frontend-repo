import { ComponentFixture, TestBed } from '@angular/core/testing';

import { editdonorinfoComponent } from './editdonorinfo.component';

describe('EditdonorinfoComponent', () => {
  let component: editdonorinfoComponent;
  let fixture: ComponentFixture<editdonorinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [editdonorinfoComponent]
    });
    fixture = TestBed.createComponent(editdonorinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
