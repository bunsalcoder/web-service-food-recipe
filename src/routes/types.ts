export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

type Handler = any;

export type MethodHandler = {
  get?: Handler | Handler[]
  post?: Handler | Handler[]
  put?: Handler | Handler[]
  delete?: Handler | Handler[]
  patch?: Handler | Handler[]
};

export type PathMiddleware = Array<any>;
export type PathDetail = [string, PathMiddleware, MethodHandler]
  | [string, PathMiddleware, MethodHandler, Record<string, PathDetail>];

export type Route = Record<any, PathDetail>;