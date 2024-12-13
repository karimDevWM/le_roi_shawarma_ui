import { Injectable } from '@angular/core';
import { Foods } from '../model/food';
import { foods } from './api/foods';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foods: Foods[] = foods;
  constructor() { }

  getFoodById(itemId: number) {
    const food = foods.find(f => f.itemId === itemId)!;
    return of(food);
  }

}
