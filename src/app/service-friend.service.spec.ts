import { TestBed } from '@angular/core/testing';

import { ServicefriendService } from './service-friend.service';

xdescribe('ServicefriendService', () => {
  let service: ServicefriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicefriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
