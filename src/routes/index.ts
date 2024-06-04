import { Route } from './types';
import testRoute from './test.route';
import userRoute from './user.route';

export default {
    ...testRoute,
    ...userRoute,
} as Route;