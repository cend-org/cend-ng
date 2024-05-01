import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongPointComponent } from './strong-point.component';

describe('StrongPointComponent', () => {
  let component: StrongPointComponent;
  let fixture: ComponentFixture<StrongPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrongPointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrongPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
