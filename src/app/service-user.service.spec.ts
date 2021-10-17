import { TestBed } from '@angular/core/testing';

import { ServiceUserService } from './service-user.service';

xdescribe('ServiceUserService', () => {
  let service: ServiceUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
