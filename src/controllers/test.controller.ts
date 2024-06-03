import { Request, Response } from 'express';
import { responseError } from '../utils/response-error';

export const getTest = (req: Request, res: Response) => {
    res.send('Test route is working');
}