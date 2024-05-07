import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSkeletonComponent } from './landing-skeleton.component';

describe('LandingSkeletonComponent', () => {
  let component: LandingSkeletonComponent;
  let fixture: ComponentFixture<LandingSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
