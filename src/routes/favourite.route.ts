import { Route } from './types';
import validate from '../validator/index';
import { permissionMiddleware } from '../middlewares/permission.middleware';
import { 
    searchFavouriteRecipe,
    AddRecipeToFavourite,
    detail,
    removeRecipeFromFavourite,


} from '../controllers/favourite.controller';

const createFavouriteReq = validate({
    properties: ['user_id', 'recipe_id'],
  });
  
  export default {
    '/favourite': ['', [], {
      get: [searchFavouriteRecipe],
      post: [createFavouriteReq, permissionMiddleware, AddRecipeToFavourite],
    }, {
      '/:id': ['', [], {
        put: [createFavouriteReq, permissionMiddleware, AddRecipeToFavourite],
        delete: [permissionMiddleware, removeRecipeFromFavourite],
      }, {
        '/detail': ['', [], {
          get: [detail]
        }]
      }],
    }],
  } as Route;