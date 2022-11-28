import { TestBed } from '@angular/core/testing';

import { PolicyholdersService } from './policyholders.service';

describe('PolicyholdersService', () => {
  let service: PolicyholdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyholdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
