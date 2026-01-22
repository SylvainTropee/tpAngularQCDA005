import {Component, effect} from '@angular/core';
import {CarbonFootprintForm} from '../carbon-footprint-form/carbon-footprint-form';
import {CarbonFootprintResult} from '../carbon-footprint-result/carbon-footprint-result';
import {DecimalPipe} from '@angular/common';
import {CarbonFootprintCompute} from '../../services/carbon-footprint-compute';
import {TravelType} from '../../models/travel';

@Component({
  selector: 'app-carbon-footprint',
  imports: [
    CarbonFootprintForm,
    CarbonFootprintResult,
    DecimalPipe
  ],
  templateUrl: './carbon-footprint.html',
  styleUrl: './carbon-footprint.css',
})
export class CarbonFootprint {

  public readonly MAX_CONSUMPTION: number = 7;
  public readonly MIN_CONSUMPTION: number = 4;

  public distance: number = 0
  public consumptionPer100: number = 0
  public quantityCo2: number = 0
  public resumeTravels;
  public travels;

  constructor(private cfc: CarbonFootprintCompute) {
    this.resumeTravels = this.cfc.resumeTravels

    effect(() => {
      this.distance = this.cfc.resumeTravels().distance;
      this.consumptionPer100 = this.cfc.resumeTravels().consumptionPer100
      this.quantityCo2 = this.cfc.resumeTravels().quantityCo2
    });


    this.travels = this.cfc.travels
    this.cfc.getTravels()
  }

  add100km() {
    if (this.distance) {
      this.distance += 100;
    }

  }

  addTravel() {
    const distance = Math.round(Math.random() * 1000)
    const consumption = Math.round(Math.random() * 10)
    this.cfc.addTravel({distance: distance, consumptionPer100: consumption, travelType: TravelType.CAR})
  }

}
