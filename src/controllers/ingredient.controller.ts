import { Request, Response } from 'express';
import { responseError } from '../utils/response-error';
import { search, insert, find, update, destroy } from '../services/ingredient.service';

/**
 * search for ingredient.
 * 
 * @param {Request} _req - the request object.
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve to the retrieval result.
 */
export const searchActiveIngredient = (req: Request, res: Response): Promise<any> => {
  const { q = '', page = 1, pageSize = 20 } = req.query;

  return search(String(q), { page, pageSize })
    .then((recipe: any) => res.json({ recipe }))
    .catch((error: any) => responseError(res, error));
}

/**
 * get detail of the ingredient base on the provided id.
 *
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - a promise that resolve when the retrieval is completed.
 */
export const detail = (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  return find(Number(id))
    .then((ingredient: any) => res.json({ ingredient }))
    .catch((error: any) => responseError(res, error));
}

/**
 * create the ingredient.
 * 
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve when the creation is completed.
 */
export const createIngredient = (req: Request, res: Response): Promise<any> => insert(req.body)
  .then((id: any) => find(Number(id)))
  .then((ingredient: any) => res.json({ ingredient }))
  .catch((error: any) => responseError(res, error));

/**
 * update an ingredient.
 * 
 * @param {Request} req - the request object.
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - the promise that resolve when the update is completed.
 */
export const updateIngredient = (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  return update(Number(id), req.body)
    .then(() => find(Number(id)))
    .then((ingredient: any) => res.json({ ingredient }))
    .catch((error: any) => responseError(res, error));
}

/**
 * delete an ingredient
 * 
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - the 
 */
export const deleteIngredient = (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  return destroy(Number(id))
    .then(() => res.json({ message: 'Ingredient is deleted successfully.'}))
    .catch((error: any) => responseError(res, error));
}