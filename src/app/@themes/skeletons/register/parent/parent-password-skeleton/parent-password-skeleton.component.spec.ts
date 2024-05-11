import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPasswordSkeletonComponent } from './parent-password-skeleton.component';

describe('ParentPasswordSkeletonComponent', () => {
  let component: ParentPasswordSkeletonComponent;
  let fixture: ComponentFixture<ParentPasswordSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentPasswordSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentPasswordSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
