import { getTest } from '../controllers/test.controller';
import { Route } from './types';

export default {
    '/test': ['', [], {
        get: [getTest]
    }],
} as Route;
