import { Injectable } from '@angular/core';
import { food } from '../shared/model/food';
import { sample_food_data } from '../../data';
@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor() { }
  getFoodData():food[]{
    return sample_food_data
  }
}
