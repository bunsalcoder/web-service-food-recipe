import { Route } from './types';
import validate from '../validator/index';
import { permissionMiddleware } from '../middlewares/permission.middleware';
import { 
    searchActiveRecipe, 
    createRecipe, 
    updateRecipe, 
    detail,
    deleteRecipe,
} from '../controllers/recipe.controller';

const createRecipeReq = validate({
  properties: ['title*', 'description', 'instructions'],
});

export default {
  '/recipe': ['', [], {
    get: [searchActiveRecipe],
    post: [createRecipeReq, permissionMiddleware, createRecipe],
  }, {
    '/:id': ['', [], {
      put: [createRecipeReq, permissionMiddleware, updateRecipe],
      delete: [permissionMiddleware, deleteRecipe],
    }, {
      '/detail': ['', [], {
        get: [detail]
      }]
    }],
  }],
} as Route;