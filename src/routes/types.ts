import { RequestHandler } from 'express';

export interface RouteHandlers {
  get?: RequestHandler[];
  post?: RequestHandler[];
  put?: RequestHandler[];
  delete?: RequestHandler[];
}

export interface Route {
  [key: string]: [string, RequestHandler[], RouteHandlers | Route] | undefined;
}
