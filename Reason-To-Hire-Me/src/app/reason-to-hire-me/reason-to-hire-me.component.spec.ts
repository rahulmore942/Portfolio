import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonToHireMeComponent } from './reason-to-hire-me.component';

describe('ReasonToHireMeComponent', () => {
  let component: ReasonToHireMeComponent;
  let fixture: ComponentFixture<ReasonToHireMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonToHireMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonToHireMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
