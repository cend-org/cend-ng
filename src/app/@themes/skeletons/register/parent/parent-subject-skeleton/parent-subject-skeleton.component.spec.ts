import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSubjectSkeletonComponent } from './parent-subject-skeleton.component';

describe('ParentSubjectSkeletonComponent', () => {
  let component: ParentSubjectSkeletonComponent;
  let fixture: ComponentFixture<ParentSubjectSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentSubjectSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentSubjectSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
