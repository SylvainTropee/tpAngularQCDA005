import { Component } from '@angular/core';
import {CarbonFootprintForm} from '../carbon-footprint-form/carbon-footprint-form';
import {CarbonFootprintResult} from '../carbon-footprint-result/carbon-footprint-result';
import {DecimalPipe} from '@angular/common';

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

  public readonly MAX_CONSUMPTION  : number = 7;
  public readonly MIN_CONSUMPTION  : number = 4;

  public distance : number
  public consumptionPer100 : number
  public travels : {distance : number, consumptionPer100 : number}[]

  constructor() {
    this.travels = [
        { distance: 50, consumptionPer100: 5 },
        { distance: 150, consumptionPer100: 6 },
        { distance: 250, consumptionPer100: 7 },
        { distance: 350, consumptionPer100: 8 },
        { distance: 450, consumptionPer100: 9 }
    ];
    this.distance = 123;
    this.consumptionPer100 = 657.45;
  }

  add100km() {
    if(this.distance){
      this.distance += 100;
    }

  }
}
