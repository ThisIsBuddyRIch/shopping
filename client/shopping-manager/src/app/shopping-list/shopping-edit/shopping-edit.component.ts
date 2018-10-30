import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  name:string;
  amount:number;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAdd(){
    this.shoppingService.addIngredient({name: this.name, amount: this.amount })
  }
}

