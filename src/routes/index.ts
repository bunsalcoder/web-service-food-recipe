import { Route } from './types';
import { verifyToken } from '../middlewares/auth.middleware';
import authRoute from './auth.route';
import testRoute from './test.route';
import userRoute from './user.route';
import recipeRoute from './recipe.route';
import categoryRoute from './category.route';
import recipeCategoryRoute from './recipe_category.route';

export default {
  ...authRoute,

  '': ['', [verifyToken], {}, {
    ...testRoute,
    ...userRoute,
    ...recipeRoute,
    ...categoryRoute,
    ...recipeCategoryRoute
  }],
} as Route;