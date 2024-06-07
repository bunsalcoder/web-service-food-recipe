import { Response, NextFunction, response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../constants';
import { responseError } from '../utils/response-error';

export const verifyToken = async (req: any, res: Response, next: NextFunction) => {
  if (req.path.startsWith('/api-docs')) return next();

  const authHeader = req.headers.authorization;
  if (!authHeader) return responseError(res, 'Invalid Authorization Headers', 401)

  const token = authHeader?.split(' ')[1];
  if (!token) return responseError(res, 'Invalid Authorization Token', 401);
  
  jwt.verify(token, JWT_SECRET_KEY, (err: any, user: any) => {
    if (err) return responseError(res, err, 403)
  
    req.user = user;
    return next();
  });
}