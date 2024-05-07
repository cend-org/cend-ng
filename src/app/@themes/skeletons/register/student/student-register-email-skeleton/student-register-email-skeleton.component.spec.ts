import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterEmailSkeletonComponent } from './student-register-email-skeleton.component';

describe('StudentRegisterEmailSkeletonComponent', () => {
  let component: StudentRegisterEmailSkeletonComponent;
  let fixture: ComponentFixture<StudentRegisterEmailSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentRegisterEmailSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentRegisterEmailSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
