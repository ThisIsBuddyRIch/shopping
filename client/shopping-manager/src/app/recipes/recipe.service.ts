import { Recipe } from "../models/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";

@Injectable()
export class RecipeService {
 
    private _recipes: Recipe[] = [
        {   
            id:1,
            name: "Dummy",
            description: "Lorem ipsum",
            imageUrl: "https://www.inspiredtaste.net/wp-content/uploads/2011/12/Pan-Roasted-Chicken-Bread-Recipe-3-1200.jpg",
            ingredients: [{name: "Meat", amount: 1}, {name:"Bread", amount:2}]
        }
    ]

    private _selectedRecipe = new EventEmitter<Recipe>();

    /**
     *
     */
    constructor(private shoppingService: ShoppingService) {
    }

    getRecipes(): Recipe[]{
        return [...this._recipes];
    }

    getById(id: number): Recipe {
        return this._recipes.find(x => x.id === id);
    }

    selectRecipe(recipe: Recipe){
        this._selectedRecipe.emit(recipe);
    }

    onSelectRecipe(callback: (recipe: Recipe) => void) : void {
        this._selectedRecipe.subscribe(callback);
    }

    addIngredients(ingredients: Ingredient[]){
        this.shoppingService.addIngredients(ingredients);
    }
}