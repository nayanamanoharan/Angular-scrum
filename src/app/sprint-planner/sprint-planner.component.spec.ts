import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintPlannerComponent } from './sprint-planner.component';

describe('SprintPlannerComponent', () => {
  let component: SprintPlannerComponent;
  let fixture: ComponentFixture<SprintPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
