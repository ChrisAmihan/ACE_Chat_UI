import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagespageComponent } from './messagespage.component';

xdescribe('MessagespageComponent', () => {
  let component: MessagespageComponent;
  let fixture: ComponentFixture<MessagespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
