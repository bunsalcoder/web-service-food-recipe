import { Request, Response } from 'express';
import { responseError } from '../utils/response-error';
import { search, insert, find, update, destroy } from '../services/recipe.service';

/**
 * List active recipe base on the provided query.
 *
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve to the retrieval result.
 */
export const searchActiveRecipe = (req: Request, res: Response) => {
  const { q = '', page = 1, pageSize = 20 } = req.query;

  return search(String(q), { page, pageSize })
    .then((recipe: any) => res.json({ recipe }))
    .catch((error: any) => responseError(res, error));
}

/**
 * Create a recipe.
 *
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - a promise that resolve when the creation is completed.
 */
export const createRecipe = (req: any, res: Response) => {
  const userId = req.user.id;
  const data = { user_id: userId, ...req.body };

  return insert(data)
    .then((id: any) => find(id))
    .then((recipe: any) => res.json({ recipe }))
    .catch((error: any) => responseError(res, error));
}

/**
 * Update a recipe
 * 
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve when the update is completed.
 */
export const updateRecipe = (req: Request, res: Response) => {
  const { id } = req.params;

  return update(Number(id), req.body)
    .then(() => find(Number(id)))
    .then((recipe: any) => res.json({ recipe }))
    .catch((error: any) => responseError(res, error));
}

/**
 * Get detail of the recipe base on the given id
 *
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - the promise that resolve to the retrieval result.
 */
export const detail = (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  return find(Number(id))
    .then((recipe: any) => res.json({ recipe }))
    .catch((error: any) => responseError(res, error));
}

export const deleteRecipe = (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  return destroy(Number(id))
    .then(() => res.json({ message: 'Recipe is deleted successfully!' }))
    .catch((error: any) => responseError(res, error));
}