import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonFootprint } from './carbon-footprint';

describe('CarbonFootprint', () => {
  let component: CarbonFootprint;
  let fixture: ComponentFixture<CarbonFootprint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonFootprint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonFootprint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
