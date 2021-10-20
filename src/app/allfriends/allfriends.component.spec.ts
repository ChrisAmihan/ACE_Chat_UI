import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfriendsComponent } from './allfriends.component';

xdescribe('AllfriendsComponent', () => {
  let component: AllfriendsComponent;
  let fixture: ComponentFixture<AllfriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
