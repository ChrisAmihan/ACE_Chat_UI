import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmessagepageComponent } from './newmessagepage.component';

describe('NewmessagepageComponent', () => {
  let component: NewmessagepageComponent;
  let fixture: ComponentFixture<NewmessagepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmessagepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmessagepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
