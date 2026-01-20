import { TestBed } from '@angular/core/testing';

import { CarbonFootprintCompute } from './carbon-footprint-compute';

describe('CarbonFootprintCompute', () => {
  let service: CarbonFootprintCompute;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarbonFootprintCompute);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
