import { TestBed } from '@angular/core/testing';

import { ServicechatService } from './service-chat.service';

xdescribe('ServicechatService', () => {
  let service: ServicechatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicechatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
