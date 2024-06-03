import { Router } from 'express';
import { Route, RouteHandlers } from '../routes/types';

const convertRoutes = (route: Route, router: Router = Router(), parentPath: string = ''): Router => {
  for (const path in route) {
    if (route.hasOwnProperty(path)) {
      const routeDef = route[path];
      if (!routeDef) continue;

      const [prefix, middlewares, subRoutes] = routeDef;
      const fullPath = `${parentPath}${path}${prefix}`;

      if (subRoutes && (subRoutes as RouteHandlers).get) {
        const handlers = subRoutes as RouteHandlers;
        if (handlers.get) router.get(fullPath, ...middlewares, ...handlers.get);
        if (handlers.post) router.post(fullPath, ...middlewares, ...handlers.post);
        if (handlers.put) router.put(fullPath, ...middlewares, ...handlers.put);
        if (handlers.delete) router.delete(fullPath, ...middlewares, ...handlers.delete);
      } else if (subRoutes && typeof subRoutes === 'object') {
        const subRouter = Router();
        convertRoutes(subRoutes as Route, subRouter, fullPath);
        router.use(fullPath, ...middlewares, subRouter);
      }
    }
  }
  return router;
};

export default convertRoutes;
