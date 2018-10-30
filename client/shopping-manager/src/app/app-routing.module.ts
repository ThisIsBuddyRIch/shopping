import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router"
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import * as RoutingConstants from "./app-routing.constants"
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeDetailDefaultComponent } from "./recipes/recipe-detail-default/recipe-detail-default.component";


const routerConfig: Routes = [
    { path: RoutingConstants.HOME, redirectTo: RoutingConstants.RECIPES, pathMatch: "full" },
    {
        path: RoutingConstants.RECIPES, component: RecipesComponent,
        children: [
            { path: RoutingConstants.RECIPE_DETAILS, component: RecipeDetailComponent },
            { path: RoutingConstants.RECIPE_HOME, component: RecipeDetailDefaultComponent, pathMatch: "full" }
        ]
    },
    { path: RoutingConstants.SHOPPING, component: ShoppingListComponent }
]


@NgModule({
    imports: [
        RouterModule.forRoot(routerConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }