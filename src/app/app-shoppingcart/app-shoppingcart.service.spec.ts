import { TestBed, inject } from '@angular/core/testing';

import { AppShoppingcartService } from './app-shoppingcart.service';

describe('AppShoppingcartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppShoppingcartService]
    });
  });

  it('should ...', inject([AppShoppingcartService], (service: AppShoppingcartService) => {
    expect(service).toBeTruthy();
  }));
});
