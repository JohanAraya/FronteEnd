import { TestBed } from '@angular/core/testing';

import { RegistroMascotaService } from './registro-mascota.service';

describe('RegistroMascotaService', () => {
  let service: RegistroMascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroMascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
