import pool, { initModel } from './pool';

const table = initModel('recipe_ingredient');

/**
 * search for the recipe_ingredient.
 *
 * @param {string} q - the query string.
 * @param {Object} paginate - page and pageSize for the pagination.
 * @returns {Promise<any>} - return promise that resolve when the search is completed.
 */
export const search = (
  q: string = '',
  paginate: any = { page: 1, pageSize: 20 }
): Promise<any> => {
  const query = table()
    .select(
      'recipe_ingredient.id',
      'recipe_ingredient.quantity',
      'recipe_ingredient.unit'
    )
    .leftJoin('recipe', 'recipe_ingredient.recipe_id', 'recipe.id')
    .leftJoin('ingredient', 'recipe_ingredient.ingredient_id', 'ingredient.id')
    .whereNull('recipe.deleted_at');

  return query.search(
    q,
    ['recipe_ingredient.quantity', 'recipe_ingredient.unit'],
    paginate
  );
};

/**
 * find a recipe_ingredient by the provided id.
 *
 * @param {number} id - the id of the recipe_ingredient to be retrieved.
 * @returns {Promise<any>} - a promise that resolve when the retrieval is completed.
 */
export const find = (id: number): Promise<any> =>
  table()
    .select(
      'recipe_ingredient.id',
      'recipe_ingredient.quantity',
      'recipe_ingredient.unit'
    )
    .where({ id })
    .whereNull('deleted_at')
    .first();

/**
 * insert the data into the database.
 *
 * @param {Record<string, any>} data - the data to be inserted into the database.
 * @param {boolean} trx - the transaction object.
 * @returns {Promise<number>} - returning the id of the inserted record.
 */
export const insert = (
  data: Record<string, any>,
  trx: boolean = false
): Promise<number> =>
  table(trx)
    .insert(data)
    .returning('id')
    .then(([{ id }]: any) => id);

/**
 * update the recipe_ingredient
 *
 * @param {number} id - the id of the record to be updated.
 * @param {Record<string, any>} data - the data to be updated.
 * @returns {Promise<any>} - the promise that resolve when the update is completed.
 */
export const update = (id: number, data: Record<string, any>): Promise<any> =>
  table().update(data).where({ id });

/**
 * delete the recipe_ingredient
 *
 * @param {number} id - the id of the record to be deleted
 * @returns {Promise<any>} - a promise that resolve when the deletion is completed.
 */
export const destroy = (id: number): Promise<any> =>
  table()
    .update({ deleted_at: pool.raw('CURRENT_TIMESTAMP') })
    .where({ id });
