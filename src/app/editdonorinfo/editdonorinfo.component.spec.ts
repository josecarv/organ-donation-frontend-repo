import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdonorinfoComponent } from './editdonorinfo.component';

describe('EditdonorinfoComponent', () => {
  let component: EditdonorinfoComponent;
  let fixture: ComponentFixture<EditdonorinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdonorinfoComponent]
    });
    fixture = TestBed.createComponent(EditdonorinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
