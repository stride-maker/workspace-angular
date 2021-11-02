import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../store/recipe.actions';

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.action$.pipe(
    ofType(RecipeActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        'https://ng-course-project-fccd4-default-rtdb.firebaseio.com/recipes.json'
      );
    }),
    map((recipes) => {
      return recipes.map((recipe) => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : [],
        };
      });
    }),
    map((recipes) => {
      return new RecipeActions.SetRecipes(recipes);
    })
  );

  @Effect({ dispatch: false })
  storeRecipes = this.action$.pipe(
    ofType(RecipeActions.STORE_RECIPE),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipeState]) => {
      return this.http.put(
        'https://ng-course-project-fccd4-default-rtdb.firebaseio.com/recipes.json',
        recipeState.recipes
      );
    })
  );

  constructor(
    private action$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
