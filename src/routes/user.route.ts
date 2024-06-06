import { Route } from './types';
import { searchActiveUsers, detail } from '../controllers/user.controller'

export default {
    '/user': ['', [], {
        get: [searchActiveUsers],
    }, {
        '/:id': ['', [], {}, {
            '/detail': ['', [], {
                get: [detail]
            }]
        }]
    }]
} as Route;
