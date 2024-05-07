import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterPasswordSkeletonComponent } from './student-register-password-skeleton.component';

describe('StudentRegisterPasswordSkeletonComponent', () => {
  let component: StudentRegisterPasswordSkeletonComponent;
  let fixture: ComponentFixture<StudentRegisterPasswordSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentRegisterPasswordSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentRegisterPasswordSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
