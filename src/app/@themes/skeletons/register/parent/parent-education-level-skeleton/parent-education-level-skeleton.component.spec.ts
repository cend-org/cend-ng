import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEducationLevelSkeletonComponent } from './parent-education-level-skeleton.component';

describe('ParentEducationLevelSkeletonComponent', () => {
  let component: ParentEducationLevelSkeletonComponent;
  let fixture: ComponentFixture<ParentEducationLevelSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentEducationLevelSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentEducationLevelSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
