import { Request, Response } from 'express';
import { responseError } from '../utils/response-error';
import { find } from '../services/test.service';

export const getTest = (req: Request, res: Response) => {
    res.send('Test route is working');
};

export const getTestById = (req: Request, res: Response) => {
    const { id } = req.params;

    return find(Number(id))
        .then((test) => res.json({ test }))
        .catch((error: any) => responseError(res, error));
}