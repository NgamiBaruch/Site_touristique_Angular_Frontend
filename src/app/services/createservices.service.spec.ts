import { TestBed } from '@angular/core/testing';

import { CreateservicesService } from './createservices.service';

describe('CreateservicesService', () => {
  let service: CreateservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
