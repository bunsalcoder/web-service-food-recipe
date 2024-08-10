import { Route } from './types';
import { searchCategory,createCategory, detail, updateCategory, deleteCategory } from '../controllers/category.controller'
import validate from '../validator/index';
import { permissionMiddleware } from '../middlewares/permission.middleware';
const createCategoryReq = validate({
    properties: ['name*'],
  });
export default {
    '/categories': ['', [], {
        get: [searchCategory],
        post: [createCategoryReq, permissionMiddleware, createCategory],
    }, {
        '/:id': ['', [], {
          put: [createCategoryReq, permissionMiddleware, updateCategory],
          delete: [permissionMiddleware, deleteCategory],
        }, {
          '/detail': ['', [], {
            get: [detail]
          }]
        }],
      }],
} as Route;
