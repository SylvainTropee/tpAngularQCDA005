import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarbonFootprintCompute {

  private travels: { distance: number, consumptionPer100: number, quantityCo2: number }[]

  constructor() {
    this.travels = [
      {distance: 50, consumptionPer100: 5, quantityCo2: 3},
      {distance: 150, consumptionPer100: 6, quantityCo2: 4},
      {distance: 250, consumptionPer100: 7, quantityCo2: 10},
      {distance: 350, consumptionPer100: 8, quantityCo2: 2},
      {distance: 450, consumptionPer100: 9, quantityCo2: 1.5}
    ];
  }

  getTravels() {
    return this.travels
  }

  addTravel(travel: any) {
    this.travels.push(travel)
  }

  getQuantityCo2ByTravel(distance : number, consumptionPer100 : number){
      return distance * consumptionPer100 / 100 * 2.3;
  }

  getResumeTravels() {

    const distance = this.travels.reduce(
      (acc, travel) => {
        return acc + travel.distance;
      }, 0)

    const consumptionPer100 = this.travels.reduce(
      (acc, travel) => {
        return acc + travel.consumptionPer100;
      }, 0) / this.travels.length;

    const quantityCo2 = this.travels.reduce(
      (acc, travel) => {
        return acc + travel.quantityCo2;
      }, 0)

    return {
      distance: distance, consumptionPer100: consumptionPer100, quantityCo2 : quantityCo2
    }
  }
}
