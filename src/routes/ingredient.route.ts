import { Route } from './types';
import validate from '../validator/index';
import { permissionMiddleware } from '../middlewares/permission.middleware';
import { 
    searchActiveIngredient, 
    createIngredient, 
    updateIngredient, 
    detail,
    deleteIngredient,
} from '../controllers/ingredient.controller';

const createIngredientReq = validate({
  properties: ['name*'],
});

export default {
  '/ingredient': ['', [], {
    get: [searchActiveIngredient],
    post: [createIngredientReq, permissionMiddleware, createIngredient],
  }, {
    '/:id': ['', [], {
      put: [createIngredientReq, permissionMiddleware, updateIngredient],
      delete: [permissionMiddleware, deleteIngredient],
    }, {
      '/detail': ['', [], {
        get: [detail]
      }]
    }],
  }],
} as Route;