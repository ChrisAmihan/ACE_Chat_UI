import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ChatListComponent } from './chat-list.component';

describe('ChatListComponent', () => {
  let component: ChatListComponent;
  let fixture: ComponentFixture<ChatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatListComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
           provide: Router,
           useValue: {
              url: '/friends'
           }
        } 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete', () => {
    const router = TestBed.inject(Router);
    component.delete(1);
    expect(router.url).toBe('/friends')
  });

  it('should search chat', () => {
    component.chatsearch('hello');
    expect(component.currentterm).toBe('hello');
  });

});
