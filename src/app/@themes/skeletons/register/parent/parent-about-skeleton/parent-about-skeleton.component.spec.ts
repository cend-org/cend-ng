import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAboutSkeletonComponent } from './parent-about-skeleton.component';

describe('ParentAboutSkeletonComponent', () => {
  let component: ParentAboutSkeletonComponent;
  let fixture: ComponentFixture<ParentAboutSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentAboutSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentAboutSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
