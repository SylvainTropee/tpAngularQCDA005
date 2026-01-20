import {Component} from '@angular/core';
import {CarbonFootprintForm} from '../carbon-footprint-form/carbon-footprint-form';
import {CarbonFootprintResult} from '../carbon-footprint-result/carbon-footprint-result';
import {DecimalPipe} from '@angular/common';
import {CarbonFootprintCompute} from '../../services/carbon-footprint-compute';

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

  public distance: number
  public consumptionPer100: number
  public quantityCo2 : number
  public travels: { distance: number, consumptionPer100: number, quantityCo2 : number }[]

  constructor(private cfc: CarbonFootprintCompute) {

    this.distance = 0;
    this.consumptionPer100 = 0
    this.quantityCo2 = 0

    this.travels = this.cfc.getTravels()
    this.calculateDistanceAndConsumptionAverage()
  }

  add100km() {
    if (this.distance) {
      this.distance += 100;
    }

  }

  addTravel() {
    const distance = Math.round(Math.random() * 1000)
    const consumption = Math.round(Math.random() * 10)
    const quantityCo2 = this.cfc.getQuantityCo2ByTravel(distance, consumption)
    this.cfc.addTravel({distance: distance, consumptionPer100: consumption, quantityCo2 : quantityCo2})
    this.calculateDistanceAndConsumptionAverage()
  }

  private calculateDistanceAndConsumptionAverage() {

    const result = this.cfc.getResumeTravels()
    this.distance = result.distance
    this.consumptionPer100 = result.consumptionPer100
    this.quantityCo2 = result.quantityCo2
  }

}
