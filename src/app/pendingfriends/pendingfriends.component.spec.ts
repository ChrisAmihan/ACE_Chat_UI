import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingfriendsComponent } from './pendingfriends.component';

describe('PendingfriendsComponent', () => {
  let component: PendingfriendsComponent;
  let fixture: ComponentFixture<PendingfriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingfriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
