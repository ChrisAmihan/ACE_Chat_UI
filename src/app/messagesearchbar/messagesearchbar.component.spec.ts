import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesearchbarComponent } from './messagesearchbar.component';

describe('MessagesearchbarComponent', () => {
  let component: MessagesearchbarComponent;
  let fixture: ComponentFixture<MessagesearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
