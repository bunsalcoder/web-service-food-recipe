import { Route } from './types';
import { getTest, getTestById } from '../controllers/test.controller';

export default {
    '/test': ['', [], {
        get: [getTest]
    }, {
        '/:id': ['', [], {
            get: [getTestById]
        }]
    }],
} as Route;
