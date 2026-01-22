import {computed, Injectable, signal} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, switchMap, tap} from 'rxjs';
import {Travel, TravelType} from '../models/travel';

@Injectable({
  providedIn: 'root',
})
export class CarbonFootprintCompute {

  private _travels = signal<Travel[]>([])
  public readonly travels = this._travels.asReadonly()

  public readonly resumeTravels = computed(
    () => this.getResumeTravels()
  )

  private readonly BASE_URL = "http://localhost:8080"

  constructor(private http: HttpClient) {

  }

  getTravels() {
    this.http.get<any[]>(`${this.BASE_URL}/tousMesVoyages/1`).pipe(
      map(
        response => {
          const travels = response.map(
            item => {
              const travel: Travel = {
                distance: item.distance,
                consumptionPer100: item.consommation,
                travelType: item.travelType,
                quantityCo2: item.co2
              }
              return travel;
            }
          )
          this._travels.set(travels)
        }
      )
    ).subscribe()
  }

  addTravel(travel: Travel) {
    this.getQuantityCo2ByTravel(travel).pipe(
      switchMap(
        (co2: number) => {
          const data = {
            userId: 1,
            distance: travel.distance,
            consommation: travel.consumptionPer100 ?? 0,
            co2: co2,
            travelType: travel.travelType
          }
          return this.http.post(`${this.BASE_URL}/ajouterUnVoyage`, data)
        }
      )
    ).subscribe(
      () => {
        this.getTravels()
      }
    )
  }

  getQuantityCo2ByTravel(travel: Travel) {
    switch (travel.travelType) {
      case TravelType.PLANE:
        return this.getQuantityCo2ByPlane(travel)
      case TravelType.TRAIN :
        return this.getQuantityCo2ByTrain(travel)
      default:
        return this.getQuantityCo2ByCar(travel)
    }
  }

  getQuantityCo2ByCar(travel: Travel) {
    const params = new HttpParams()
      .set('consommationPour100Km', travel.consumptionPer100)
      .set('distanceKm', travel.distance)
    return this.http.get<{ empreinteCarbone: number }>(`${this.BASE_URL}/calculerTrajetVoiture`, {params: params}).pipe(
      map(
        response => response.empreinteCarbone
      )
    )
  }

  getQuantityCo2ByTrain(travel: Travel) {
    const params = new HttpParams()
      .set('distanceKm', travel.distance)
    return this.http.get<{ empreinteCarbone: number }>(`${this.BASE_URL}/calculerTrajetTrain`, {params: params}).pipe(
      map(
        response => response.empreinteCarbone
      )
    )
  }

  getQuantityCo2ByPlane(travel: Travel) {
    const params = new HttpParams()
      .set('distanceKm', travel.distance)
    return this.http.get<{ empreinteCarbone: number }>(`${this.BASE_URL}/calculerTrajetAvion`, {params: params}).pipe(
      map(
        response => response.empreinteCarbone
      )
    )
  }

  getResumeTravels() {

    const distance = this.travels().reduce(
      (acc, travel) => {
        return acc + travel.distance;
      }, 0)

    const consumptionPer100 = this.travels().reduce(
      (acc, travel) => {
        return acc + travel.consumptionPer100;
      }, 0) / this.travels().length;

    const quantityCo2 = this.travels().reduce(
      (acc, travel) => {
        return acc + (travel.quantityCo2 ?? 0);
      }, 0)

    return {
      distance: distance, consumptionPer100: consumptionPer100, quantityCo2: quantityCo2
    }
  }
}
