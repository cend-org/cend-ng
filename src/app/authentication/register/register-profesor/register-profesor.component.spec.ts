import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProfesorComponent } from './register-profesor.component';

describe('RegisterProfesorComponent', () => {
  let component: RegisterProfesorComponent;
  let fixture: ComponentFixture<RegisterProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
