import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildSkeletonComponent } from './parent-child-skeleton.component';

describe('ParentChildSkeletonComponent', () => {
  let component: ParentChildSkeletonComponent;
  let fixture: ComponentFixture<ParentChildSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentChildSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentChildSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
