import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCourseTypeSkeletonComponent } from './parent-course-type-skeleton.component';

describe('ParentCourseTypeSkeletonComponent', () => {
  let component: ParentCourseTypeSkeletonComponent;
  let fixture: ComponentFixture<ParentCourseTypeSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentCourseTypeSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentCourseTypeSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
