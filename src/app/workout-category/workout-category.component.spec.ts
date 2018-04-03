import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCategoryComponent } from './workout-category.component';

describe('WorkoutCategoryComponent', () => {
  let component: WorkoutCategoryComponent;
  let fixture: ComponentFixture<WorkoutCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
