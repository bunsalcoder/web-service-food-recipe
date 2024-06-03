import { getTest, getTestById } from '../controllers/test.controller';
import { Route } from './types';

export default {
    '/test': ['', [], {
        get: [getTest]
    }, {
        '/:id': ['', [], {
            get: [getTestById]
        }]
    }],
} as Route;
