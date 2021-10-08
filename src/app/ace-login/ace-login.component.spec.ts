import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceLoginComponent } from './ace-login.component';

describe('AceLoginComponent', () => {
  let component: AceLoginComponent;
  let fixture: ComponentFixture<AceLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
