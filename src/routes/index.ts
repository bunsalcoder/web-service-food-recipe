import { Route } from './types';
import { verifyToken } from '../middlewares/auth.middleware';
import authRoute from './auth.route';
import testRoute from './test.route';
import userRoute from './user.route';
import recipeRoute from './recipe.route';
import favouriteRoute from './favourite.route';
import recipeIngredientRoute from './recipe_ingredient.route';
import categoryRoute from './category.route';
import recipeCategoryRoute from './recipe_category.route';

export default {
  ...authRoute,

  '': [
    '',
    [verifyToken],
    {},
    {
      ...testRoute,
      ...userRoute,
      ...recipeRoute,
      ...favouriteRoute,
      ...recipeIngredientRoute,
      ...categoryRoute,
      ...recipeCategoryRoute,
    },
  ],
} as Route;
