import { Route } from './types';
import { permissionMiddleware } from '../middlewares/permission.middleware';
import { searchActiveUsers, detail } from '../controllers/user.controller'

export default {
    '/user': ['', [permissionMiddleware], {
        get: [searchActiveUsers],
    }, {
        '/:id': ['', [], {}, {
            '/detail': ['', [], {
                get: [detail]
            }]
        }]
    }]
} as Route;
