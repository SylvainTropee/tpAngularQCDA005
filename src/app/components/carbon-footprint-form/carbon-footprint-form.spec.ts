import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonFootprintForm } from './carbon-footprint-form';

describe('CarbonFootprintForm', () => {
  let component: CarbonFootprintForm;
  let fixture: ComponentFixture<CarbonFootprintForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonFootprintForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonFootprintForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
