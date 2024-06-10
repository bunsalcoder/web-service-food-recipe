import { Route } from './types';
import { searchRecipeCategory,createRecipeCategory, detail, updateRecipeCategory, deleteRecipeCategory } from '../controllers/recipe_category.controller'
import validate from '../validator/index';
import { permissionMiddleware } from '../middlewares/permission.middleware';

const createRecipeCategoryReq = validate({
  properties: ['recipeId*', 'categoryId*'],
});

export default {
    '/recipe-categories': ['', [], {
        get: [searchRecipeCategory],
        post: [createRecipeCategoryReq, permissionMiddleware, createRecipeCategory],
    }, {
        '/:id': ['', [], {
          put: [createRecipeCategoryReq, permissionMiddleware, updateRecipeCategory],
          delete: [permissionMiddleware, deleteRecipeCategory],
        }, {
          '/detail': ['', [], {
            get: [detail]
          }]
        }],
      }],
} as Route;
