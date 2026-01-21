import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CarbonFootprintCompute} from '../../services/carbon-footprint-compute';

@Component({
  selector: 'app-carbon-footprint-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './carbon-footprint-form.html',
  styleUrl: './carbon-footprint-form.css',
})
export class CarbonFootprintForm {

  public travelForm: FormGroup

  constructor(private cfc: CarbonFootprintCompute) {
    this.travelForm = new FormGroup(
      {
        distance: new FormControl(null, [Validators.required, Validators.min(1)]),
        consumption: new FormControl(null, [Validators.required, Validators.min(1)]),
        date: new FormControl(null, [Validators.required]),
        travelType: new FormControl('car', [Validators.required, Validators.pattern(/(car|plane|train)/)]),
      }
    )

    this.travelForm.get('travelType')?.valueChanges.subscribe(
      value => {
        const consumption = this.travelForm.get('consumption')
        if (value == 'car') {
          consumption?.setValidators([Validators.required, Validators.min(1)])
        } else {
          consumption?.clearValidators()
          consumption?.setValue(null)
        }
        consumption?.updateValueAndValidity()
      }
    )
  }

  onTravelSubmit() {
    if (this.travelForm.valid) {
      const value = this.travelForm.value

      console.log(value)
      const quantityCo2 = this.cfc.getQuantityCo2ByTravel(value.distance, value.consumption, value.travelType)
      this.cfc.addTravel(
        {distance: value.distance, consumptionPer100: value.consumption, quantityCo2: quantityCo2}
      )
    } else {
      this.travelForm.markAllAsTouched()
    }
  }


}
