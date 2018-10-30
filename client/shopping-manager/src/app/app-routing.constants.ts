export const RECIPES = "recipes";
export const SHOPPING = "shopping";
export const HOME = "";
export const RECIPE_DETAILS = ":id";
export const RECIPE_HOME = "";

export function generateLink(...routes: string[]): string{
    return routes.reduce((acc, item, index) => {
        acc+=item;
        if(index !== routes.length-1){
          acc += "/"
        } 
        return acc
    }, "/")
}