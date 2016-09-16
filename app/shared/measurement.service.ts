import { Injectable } from '@angular/core';
import { Measurement } from './Measurement'

@Injectable()
export class MeasurementService {

  getMeasurements()
  {
    var Measurements:Measurement[] = 
    [{id: 1, name: "None"},
    {id: 2, name: "Teaspoon"},
    {id:3, name: "Tablespoon"},
    {id: 4, name: "Cup"},
    {id: 5, name: "Can"},
  {id: 6, name: "Ounces"}];
    return Measurements;
  }
}
