import { TestBed } from '@angular/core/testing';

import { ToastsService } from './toasts-global.service';

describe('ToastsGlobalService', () => {
  let service: ToastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
