import { TestBed } from '@angular/core/testing';

import { ServicechatlogService } from './service-chatlog.service';

xdescribe('ServicechatlogService', () => {
  let service: ServicechatlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicechatlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
