import { TestBed, inject } from '@angular/core/testing';

import { CustomCallbacksService } from './custom-callbacks.service';

describe('CustomCallbacksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomCallbacksService]
    });
  });

  it('should be created', inject([CustomCallbacksService], (service: CustomCallbacksService) => {
    expect(service).toBeTruthy();
  }));
});
