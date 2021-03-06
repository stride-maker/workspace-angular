import { Recipe } from '../recipe.model';
import * as RecipeActions from '../store/recipe.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [],
};

export function recipeReducer(
  state = initialState,
  action: RecipeActions.LIST_ACTIONS
) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES: {
      return {
        ...state,
        recipes: [...action.payload],
      };
    }
    case RecipeActions.ADD_RECIPE: {
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    }
    case RecipeActions.UPDATE_RECIPE: {
      const updateRecipe = {
        ...state.recipes[action.payload.index],
        ...action.payload.recipe,
      };
      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payload.index] = updateRecipe;

      return {
        ...state,
        recipes: updatedRecipes,
      };
    }
    case RecipeActions.DELETE_RECIPE: {
      return {
        ...state,
        recipes: state.recipes.filter((recipe, index) => {
          return index !== action.payload;
        }),
      };
    }
    default:
      return state;
  }
}
