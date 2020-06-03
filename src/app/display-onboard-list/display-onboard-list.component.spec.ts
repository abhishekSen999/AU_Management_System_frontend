import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOnboardListComponent } from './display-onboard-list.component';

describe('DisplayOnboardListComponent', () => {
  let component: DisplayOnboardListComponent;
  let fixture: ComponentFixture<DisplayOnboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOnboardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOnboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
