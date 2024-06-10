import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplinksComponent } from './implinks.component';

describe('ImplinksComponent', () => {
  let component: ImplinksComponent;
  let fixture: ComponentFixture<ImplinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImplinksComponent]
    });
    fixture = TestBed.createComponent(ImplinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
