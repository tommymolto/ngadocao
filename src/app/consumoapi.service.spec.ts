import { TestBed, inject } from '@angular/core/testing';

import { ConsumoapiService } from './consumoapi.service';

describe('ConsumoapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumoapiService]
    });
  });

  it('should be created', inject([ConsumoapiService], (service: ConsumoapiService) => {
    expect(service).toBeTruthy();
  }));
});
