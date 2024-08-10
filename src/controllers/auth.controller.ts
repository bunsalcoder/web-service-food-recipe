import { Request, Response } from 'express';
import { responseError } from '../utils/response-error';
import { register, login } from '../services/auth.service';

/**
 * Register a user into the database.
 * 
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve when the registeration is completed.
 */
export const registerUser = (req: Request, res: Response): Promise<any> => register(req.body)
  .then(() => res.json({ message: 'User registered successfully.' }))
  .catch((error: any) => responseError(res, error));

/**
 * Login user
 * 
 * @param {Request} req - the request object.
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve when the login is completed.
 */
export const loginUser = (req: Request, res: Response): Promise<any> => login(req.body)
  .then((token: any) => res.json({ token }))
  .catch((error: any) => responseError(res, error));