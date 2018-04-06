import { TestBed, inject } from '@angular/core/testing';

import { GreetingService } from './greeting.service';
import { HttpModule } from '@angular/http';

describe('GreetingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreetingService],
      imports: [HttpModule],
    });
  });

  it('should be created', inject([GreetingService], (service: GreetingService) => {
    expect(service).toBeTruthy();
  }));
});
