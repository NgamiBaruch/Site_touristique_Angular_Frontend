import { TestBed } from '@angular/core/testing';

import { CreateAgentService } from './create-agent.service';

describe('CreateAgentService', () => {
  let service: CreateAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
