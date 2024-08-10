import { Router, Application } from 'express';
import { Route, PathDetail, HttpMethod } from './types';

const registerHandler = ({ handlers, router }: any) => {
  const methods = Object.keys(handlers) as Array<HttpMethod>;
  const path = '/';
  methods.forEach((method) => {
    const methodHandlers = handlers[method];
    const callbacks = Array.isArray(methodHandlers)
      ? methodHandlers
      : [methodHandlers];
    router[method](path, ...callbacks);
  });
};

const createRouter = (pathHandler: PathDetail): any => {
  const router = Router({ mergeParams: true });
  const [_name, middlewares, handlers, children = {}] = pathHandler;
  if (middlewares.length > 0) router.use(...middlewares);
  registerHandler({ handlers, router });

  const childPaths = Object.keys(children);
  if (childPaths.length === 0) return router;

  childPaths.forEach((childPath: any) => {
    const childRouter = createRouter(children[childPath]);
    router.use(childPath, childRouter);
  });

  return router;
};

export default function registerRoutes(app: Application, routes: Route) {
  const paths = Object.keys(routes);
  paths.forEach((path: string) => {
    const pathDetail: PathDetail = routes[path];
    const router = createRouter(pathDetail);
    app.use(path, router);
  });
}
