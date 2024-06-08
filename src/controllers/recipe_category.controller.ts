import { Request, Response } from 'express';
import { responseError } from '../utils/response-error';

import { search,insert, find, update, destroy } from '../services/recipe_category.service';

/**
 * List all active users.
 *
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - a promise that resolve to the result retrieval.
 */
export const searchRecipeCategory = (req: Request, res: Response) => {
    const {
        q = '', page = 1, pageSize = 20, isActive,
    } = req.query;

    return search(String(q), { page, pageSize })
        .then((recipe_category: any) => res.json({ recipe_category }))
        .catch((error: any) => responseError(res, error));
}

/**
 * Create a recipe.
 *
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - a promise that resolve when the creation is completed.
 */
export const createRecipeCategory = (req: any, res: Response) => {
    const data = { ...req.body };
  
    return insert(data)
      .then((id: any) => find(id))
      .then((recipe_category: any) => res.json({ recipe_category }))
      .catch((error: any) => responseError(res, error));
  }


/**
 * Update a recipe
 * 
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve when the update is completed.
 */
export const updateRecipeCategory = (req: Request, res: Response) => {
    const { id } = req.params;
  
    return update(Number(id), req.body)
      .then(() => find(Number(id)))
      .then((recipe_category: any) => res.json({ recipe_category }))
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
        .then((recipe_category: any) => res.json({ recipe_category }))
        .catch((error: any) => responseError(res, error));
}


export const deleteRecipeCategory = (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
  
    return destroy(Number(id))
      .then(() => res.json({ message: 'Recipe Category is deleted successfully!' }))
      .catch((error: any) => responseError(res, error));
  }