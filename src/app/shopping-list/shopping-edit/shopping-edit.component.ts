import { Component, OnInit,ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';

import {Ingredient} from "../../shared/ingredient.model"

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", {static:false}) nameInputRef: ElementRef
  @ViewChild("amountInput", {static:false}) amountInputRef: ElementRef
  
  @Output() ingredientsAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  
  onAddItem(){
    const name = this.nameInputRef.nativeElement.value
    const amount = this.amountInputRef.nativeElement.value
    const ingredient = new Ingredient(name, amount)
    this.ingredientsAdded.emit(ingredient)
  }

}
