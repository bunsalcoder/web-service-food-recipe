import { Response, NextFunction } from 'express';
import { responseError } from '../utils/response-error';

export const permissionMiddleware = (req: any, res: Response, next: NextFunction) => {
  const user = req.user;

  if (!user || !user.isAdmin) return responseError(res, 'Permission Denied', 403);

  return next();
}