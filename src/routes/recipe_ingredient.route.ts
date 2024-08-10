import { Route } from './types';
import validate from '../validator/index';
import { permissionMiddleware } from '../middlewares/permission.middleware';
import {
  deleteRecipeIngredient,
  detail,
  searchActiveRecipeIngredient,
  updateRecipeIngredient,
  createRecipeIngredient,
} from '../controllers/recipe_ingredient.controller';

const createRecipeIngredientReq = validate({
  properties: ['recipeId*', 'ingredientId*', 'quantity*', 'unit*'],
});

export default {
  '/recipe-ingredient': ['', [], {
      get: [searchActiveRecipeIngredient],
      post: [
        createRecipeIngredientReq,
        permissionMiddleware,
        createRecipeIngredient,
      ],
    }, {
      '/:id': ['', [], {
          put: [
            createRecipeIngredientReq,
            permissionMiddleware,
            updateRecipeIngredient,
          ],
          delete: [permissionMiddleware, deleteRecipeIngredient],
        }, {
          '/detail': ['', [], {
              get: [detail],
            },
          ],
        },
      ],
    },
  ],
} as Route;
