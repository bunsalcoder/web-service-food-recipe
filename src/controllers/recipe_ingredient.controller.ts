import { Request, Response } from 'express';
import { responseError } from '../utils/response-error';
import {
  search,
  insert,
  find,
  update,
  destroy,
} from '../services/recipe_ingredient.service';
import { quantity } from '../validator/schemas';
/**
 * List active recipe_ingredient base on the provided query.
 *
 * @param {Request} req - the request object.
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - a promise that resolve to the retrieval result.
 */
export const searchActiveRecipeIngredient = (req: Request, res: Response) => {
  const { q = '', page = 1, pageSize = 20 } = req.query;

  return search(String(q), { page, pageSize })
    .then((recipeIngredient: any) => res.json({ recipeIngredient }))
    .catch((error: any) => responseError(res, error));
};

/**
 * Create a recipe_ingredient.
 *
 * @param {Request} req - the request object.
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - a promise that resolve when the creation is completed.
 */
export const createRecipeIngredient = (req: any, res: Response) => {
  const { 
    recipeId: recipe_id, ingredientId: ingredient_id,
    quantity, unit
  } = req.body;

  const data = { recipe_id, ingredient_id, quantity, unit }
  
  return insert(data)
    .then((id: any) => find(id))
    .then((recipeIngredient: any) => res.json({ recipeIngredient }))
    .catch((error: any) => responseError(res, error));
}

/**
 * Update a recipe_ingredient
 *
 * @param {Request} req - the request object.
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - a promise that resolve when the update is completed.
 */
export const updateRecipeIngredient = (req: Request, res: Response) => {
  const { id } = req.params;

  const { 
    recipeId: recipe_id, ingredientId: ingredient_id,
    quantity, unit
  } = req.body;

  const data = { recipe_id, ingredient_id, quantity, unit }

  return update(Number(id), data)
    .then(() => find(Number(id)))
    .then((recipeIngredient: any) => res.json({ recipeIngredient }))
    .catch((error: any) => responseError(res, error));
};

/**
 * Get detail of the recipe_ingredient base on the given id
 *
 * @param {Request} req - the request object.
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - the promise that resolve to the retrieval result.
 */
export const detail = (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  return find(Number(id))
    .then((recipeIngredient: any) => res.json({ recipeIngredient }))
    .catch((error: any) => responseError(res, error));
};

export const deleteRecipeIngredient = (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;

  return destroy(Number(id))
    .then(() =>
      res.json({ message: 'Recipe_ingredient is deleted successfully!' })
    )
    .catch((error: any) => responseError(res, error));
};
