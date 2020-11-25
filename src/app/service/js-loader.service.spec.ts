import { TestBed } from '@angular/core/testing';

import { JsLoaderService } from './js-loader.service';

describe('JsLoaderService', () => {
  let service: JsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
