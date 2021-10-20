import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { NewUserComponent } from './new-user.component';
import { Router } from '@angular/router';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
           provide: Router,
           useValue: {
              url: '/login'
           }
        } 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create new user', () => {
    const router = TestBed.inject(Router);
    component.user.username='test';
    component.user.name='test';
    component.user.password='test';
    component.newAccount();
    expect(router.url).toBe('/login')
  });
});
