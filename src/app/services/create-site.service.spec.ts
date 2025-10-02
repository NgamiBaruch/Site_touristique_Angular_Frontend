import { TestBed } from '@angular/core/testing';

import { CreateSiteService } from './create-site.service';

describe('CreateSiteService', () => {
  let service: CreateSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
