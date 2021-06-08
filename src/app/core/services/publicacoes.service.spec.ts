import { TestBed } from '@angular/core/testing';

import { PublicacoesService } from './publicacoes.service';

describe('PublicacoesService', () => {
  let service: PublicacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
