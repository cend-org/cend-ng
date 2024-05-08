import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseTypeSkeletonComponent } from './student-course-type-skeleton.component';

describe('StudentCourseTypeSkeletonComponent', () => {
  let component: StudentCourseTypeSkeletonComponent;
  let fixture: ComponentFixture<StudentCourseTypeSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentCourseTypeSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCourseTypeSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
