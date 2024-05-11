import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRegisterEmailSkeletonComponent } from './parent-register-email-skeleton.component';

describe('ParentRegisterEmailSkeletonComponent', () => {
  let component: ParentRegisterEmailSkeletonComponent;
  let fixture: ComponentFixture<ParentRegisterEmailSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentRegisterEmailSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentRegisterEmailSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
