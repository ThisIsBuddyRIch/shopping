import { Ingredient } from "../models/ingredient.model";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class ShoppingService{
    private _ingredients: Ingredient[] = [
        {name:"apples", amount:5},
        {name: "tomato", amount:10}
    ]

    ingredientsChanges = new EventEmitter<Ingredient[]>();

        

    getIngredients(){
        return [...this._ingredients]
    }

    addIngredient(ingredient: Ingredient){
        this._ingredients.push(ingredient);
        this.ingredientsChanges.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]){
        this._ingredients.push(...ingredients);
        this.ingredientsChanges.emit(this.getIngredients());
    }
}
