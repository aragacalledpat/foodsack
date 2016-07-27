import { Injectable } from '@angular/core';
import { Measurement } from './measurement'

@Injectable()
export class MeasurementService {

  getMeasurements()
  {
    var Measurements:Measurement[] = [{id: 1, name: "None"},{id: 2, name: "Teaspoon"},{id:3, name: "Tablespoon"},{id: 4, name: "Cup"}];
    return Measurements;
  }
}
