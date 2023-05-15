import { TestBed } from '@angular/core/testing';

import { CheckoutFeedServiceService } from './checkout-feed-service.service';

describe('CheckoutFeedServiceService', () => {
  let service: CheckoutFeedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutFeedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
