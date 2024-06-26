import { Request, Response } from 'express';
import { responseError } from '../utils/response-error';

import { search,insert, find, update, destroy } from '../services/category.service';

/**
 * List all active users.
 *
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - a promise that resolve to the result retrieval.
 */
export const searchCategory = (req: Request, res: Response) => {
    const {
        q = '', page = 1, pageSize = 20,
    } = req.query;

    return search(String(q), { page, pageSize })
        .then((category: any) => res.json({ category }))
        .catch((error: any) => responseError(res, error));
}

/**
 * Create a recipe.
 *
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - a promise that resolve when the creation is completed.
 */
export const createCategory = (req: any, res: Response) => {
    const data = { ...req.body };
  
    return insert(data)
      .then((id: any) => find(id))
      .then((category: any) => res.json({ category }))
      .catch((error: any) => responseError(res, error));
  }


/**
 * Update a recipe
 * 
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve when the update is completed.
 */
export const updateCategory = (req: Request, res: Response) => {
    const { id } = req.params;
  
    return update(Number(id), req.body)
      .then(() => find(Number(id)))
      .then((category: any) => res.json({ category }))
      .catch((error: any) => responseError(res, error));
  }

/**
 * Retrieve the detail of user base on the given ID.
 *
 * @param {Request} req - the request object.
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve to the detail of the detail retrieval.
 */
export const detail = (req: Request, res: Response) => {
    const { id } = req.params;

    return find(Number(id))
        .then((category: any) => res.json({ category }))
        .catch((error: any) => responseError(res, error));
}


export const deleteCategory = (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
  
    return destroy(Number(id))
      .then(() => res.json({ message: 'Category is deleted successfully!' }))
      .catch((error: any) => responseError(res, error));
  }