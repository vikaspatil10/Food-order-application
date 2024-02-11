import { Component } from '@angular/core';
import { FoodServiceService } from '../../../services/food-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  food:any
 constructor( private foodData: FoodServiceService){
  this.GetFoodData()
 }

 GetFoodData(){
  this.food = this.foodData.getFoodData()
 }
}
