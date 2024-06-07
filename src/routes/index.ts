import { Route } from './types';
import { verifyToken } from '../middlewares/auth.middleware';
import authRoute from './auth.route';
import testRoute from './test.route';
import userRoute from './user.route';
import recipeRoute from './recipe.route';

export default {
  ...authRoute,

  '': ['', [verifyToken], {}, {
    ...testRoute,
    ...userRoute,
    ...recipeRoute,
  }],
} as Route;