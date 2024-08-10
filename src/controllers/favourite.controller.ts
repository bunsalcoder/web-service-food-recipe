import { Request, Response } from 'express';
import { responseError } from '../utils/response-error';

import { search, insert, find, update, destroy } from '../services/favourite.service';

/**
 * List favourite recipes base on the provided query.
 *
 * @param {any} req - the request object. 
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve to the retrieval result.
 */
export const searchFavouriteRecipe = (req: any, res: Response) => {
  const { q = '', page = 1, pageSize = 20 } = req.query;
  const userId = req.user.id;

  return search(String(q), { page, pageSize }, userId)
    .then((favourite: any) => res.json({ favourite }))
    .catch((error: any) => responseError(res, error));
}

/**
 * Adding a recipe to favourite.
 *
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - a promise that resolve when the creation is completed.
 */
export const AddRecipeToFavourite = (req: any, res: Response) => {
  const { recipeId } = req.body;
  const userId = req.user.id;
  const data = { user_id: userId, recipe_id: recipeId };

  return insert(data)
    .then((id: any) => find(id))
    .then((recipe: any) => res.json({ recipe }))
    .catch((error: any) => responseError(res, error));
}

/**
 * Update a your favourite recipe
 * 
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve when the update is completed.
 */
export const updateFavouriteRecipe = (req: Request, res: Response) => {
  const { id } = req.params;

  return update(Number(id), req.body)
    .then(() => find(Number(id)))
    .then((recipe: any) => res.json({ recipe }))
    .catch((error: any) => responseError(res, error));
}

/**
 * Get detail of the recipe added to favourite base on the given id
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
  
export const removeRecipeFromFavourite = (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  return destroy(Number(id))
    .then(() => res.json({ message: 'Remove from favourite successfully!' }))
    .catch((error: any) => responseError(res, error));
}

