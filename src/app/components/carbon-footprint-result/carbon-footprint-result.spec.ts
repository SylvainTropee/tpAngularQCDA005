import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonFootprintResult } from './carbon-footprint-result';

describe('CarbonFootprintResult', () => {
  let component: CarbonFootprintResult;
  let fixture: ComponentFixture<CarbonFootprintResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonFootprintResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonFootprintResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
