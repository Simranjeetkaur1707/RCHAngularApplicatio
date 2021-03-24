import { TestBed } from '@angular/core/testing';

import { ECServiceService } from './ecservice.service';

describe('ECServiceService', () => {
  let service: ECServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ECServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
