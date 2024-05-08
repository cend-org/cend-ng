import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAboutSkeletonComponent } from './student-about-skeleton.component';

describe('StudentAboutSkeletonComponent', () => {
  let component: StudentAboutSkeletonComponent;
  let fixture: ComponentFixture<StudentAboutSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentAboutSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentAboutSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
