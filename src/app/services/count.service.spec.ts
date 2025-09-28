import { TestBed } from '@angular/core/testing';

import { CountService } from './count.service';

describe('CountService', () => {
  let service: CountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
