import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpNoticeComponent } from './imp-notice.component';

describe('ImpNoticeComponent', () => {
  let component: ImpNoticeComponent;
  let fixture: ComponentFixture<ImpNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpNoticeComponent]
    });
    fixture = TestBed.createComponent(ImpNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
