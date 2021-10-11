import { TestBed } from '@angular/core/testing';

import { ServiceblockService } from './service-block.service';

describe('ServiceblockService', () => {
  let service: ServiceblockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceblockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
