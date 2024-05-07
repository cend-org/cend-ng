import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterOtpSkeletonComponent } from './student-register-otp-skeleton.component';

describe('StudentRegisterOtpSkeletonComponent', () => {
  let component: StudentRegisterOtpSkeletonComponent;
  let fixture: ComponentFixture<StudentRegisterOtpSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentRegisterOtpSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentRegisterOtpSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
