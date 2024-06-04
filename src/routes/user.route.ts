import { Route } from './types';
import validate from '../validator';
import { 
    searchActiveUsers, 
    createUser, 
    updateUser, 
    detail 
} from '../controllers/user.controller'

const createUserReq = validate({
    properties: ['username*', 'email*', 'password*']
});

export default {
    '/user': ['', [], {
        get: [searchActiveUsers],
        post: [createUserReq, createUser],
    }, {
        '/:id': ['', [], {
            put: [updateUser]
        }, {
            '/detail': ['', [], {
                get: [detail]
            }]
        }]
    }]
} as Route;
