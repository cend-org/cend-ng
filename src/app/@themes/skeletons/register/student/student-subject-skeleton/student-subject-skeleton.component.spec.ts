import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectSkeletonComponent } from './student-subject-skeleton.component';

describe('StudentSubjectSkeletonComponent', () => {
  let component: StudentSubjectSkeletonComponent;
  let fixture: ComponentFixture<StudentSubjectSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentSubjectSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentSubjectSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
