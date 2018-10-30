import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from '../../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe = null;

  constructor(private recipeService: RecipeService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick() {
    //this.recipeService.selectRecipe(this.recipe);
    this.router.navigate([this.recipe.id], {relativeTo: this.activeRoute})
  }

}
