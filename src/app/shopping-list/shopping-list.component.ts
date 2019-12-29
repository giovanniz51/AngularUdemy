import { Component, OnInit, ViewChild, AfterViewInit} from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component"
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit, AfterViewInit {
  @ViewChild(ShoppingEditComponent, {static: false})
  shoppingEditComponent: ShoppingEditComponent;
  
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatos", 10)
  ];
  constructor() {}

  ngOnInit() {}
  
  ngAfterViewInit() {
  }
  
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient)
  }
}
