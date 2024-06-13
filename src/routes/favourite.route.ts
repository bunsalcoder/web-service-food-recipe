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
      post: [createFavouriteReq, AddRecipeToFavourite],
    }, {
      '/:id': ['', [], {
        put: [createFavouriteReq, permissionMiddleware, AddRecipeToFavourite],
        delete: [removeRecipeFromFavourite],
      }, {
        '/detail': ['', [], {
          get: [detail]
        }]
      }],
    }],
  } as Route;