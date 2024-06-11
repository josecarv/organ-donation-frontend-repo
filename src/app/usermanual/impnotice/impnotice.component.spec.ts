import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpnoticeComponent } from './impnotice.component';

describe('ImpnoticeComponent', () => {
  let component: ImpnoticeComponent;
  let fixture: ComponentFixture<ImpnoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpnoticeComponent]
    });
    fixture = TestBed.createComponent(ImpnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
