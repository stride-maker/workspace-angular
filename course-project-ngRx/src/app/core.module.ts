import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    RecipeResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
