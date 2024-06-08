import { Route } from './types';
import { verifyToken } from '../middlewares/auth.middleware';
import authRoute from './auth.route';
import testRoute from './test.route';
import userRoute from './user.route';
import recipeRoute from './recipe.route';
import favouriteRoute from './favourite.route';

export default {
  ...authRoute,

  '': ['', [verifyToken], {}, {
    ...testRoute,
    ...userRoute,
    ...recipeRoute,
    ...favouriteRoute,
  }],
} as Route;