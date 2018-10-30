import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe = null;

  constructor(private recipeService: RecipeService, private thisRoute: ActivatedRoute) { }

  ngOnInit() {
    // var id = +this.thisRoute.snapshot.params["id"];
    // this.recipe = this.recipeService.getById(id);
    // console.log(id, this.recipe);
    this.thisRoute.params.subscribe(queryParams => {
      var id = +queryParams["id"];
      this.recipe = this.recipeService.getById(id);
    })
  }

  onAddIngredients(){
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
}
