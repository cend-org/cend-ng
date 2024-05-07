import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPasswordSkeletonComponent } from './student-password-skeleton.component';

describe('StudentPasswordSkeletonComponent', () => {
  let component: StudentPasswordSkeletonComponent;
  let fixture: ComponentFixture<StudentPasswordSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentPasswordSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPasswordSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
