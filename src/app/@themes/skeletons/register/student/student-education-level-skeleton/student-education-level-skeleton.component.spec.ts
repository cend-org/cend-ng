import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEducationLevelSkeletonComponent } from './student-education-level-skeleton.component';

describe('StudentEducationLevelSkeletonComponent', () => {
  let component: StudentEducationLevelSkeletonComponent;
  let fixture: ComponentFixture<StudentEducationLevelSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentEducationLevelSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentEducationLevelSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
