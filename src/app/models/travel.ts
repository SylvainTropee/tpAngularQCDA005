export enum TravelType {
  CAR = 'car', TRAIN = 'train', PLANE = 'plane'
}

export interface Travel {
  distance: number,
  consumptionPer100: number,
  quantityCo2?: number,
  travelType: TravelType
}
