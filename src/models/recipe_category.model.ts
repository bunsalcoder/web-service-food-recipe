import pool, { initModel } from './pool';

const table = initModel('recipe_category');

/**
 * Retrieve all users from the database.
 * 
 * @return {Promise<any>} - return a promise that resolve to the list of users.
 */
export const search = (
    q: string = '',
    paginate: any = { page: 1, pageSize: 20 },
): Promise<any> => {
    const query = table()
    .leftJoin('recipe', 'recipe_category.recipe_id', 'recipe.id')
    .leftJoin('category', 'recipe_category.category_id', 'category.id')
    .select(
      'category.name as category',
      'recipe.title',
      'recipe.description',
      'recipe.instructions',
    )
    .whereNull('recipe_category.deleted_at');

    return query.search(q, ['category.name', 'recipe.title', 'recipe.description', 'recipe.instructions'], paginate);
}

/**
 * insert the data into the database.
 *
 * @param {Record<string, any>} data - the data to be inserted into the database.
 * @param {boolean} trx - the transaction object. 
 * @returns {Promise<number>} - returning the id of the inserted record.
 */
export const insert = (data: Record<string, any>, trx: boolean = false)
  : Promise<number> => table(trx).insert(data)
    .returning('id')
    .then(([{ id }]: any) => id);

    /**
 * update the recipe
 * 
 * @param {number} id - the id of the record to be updated. 
 * @param {Record<string, any>} data - the data to be updated.
 * @returns {Promise<any>} - the promise that resolve when the update is completed.
 */
export const update = (id: number, data: Record<string, any>)
: Promise<any> => table().update(data).where({ id });

/**
 * Retrieve a user by the provided id
 *
 * @param {number} id - the ID of the record. 
 * @returns {Promise<any>} - a promise that resolve to the user object.
 */
export const find = (id: number): Promise<any> => table()
.leftJoin('recipe', 'recipe_category.recipe_id', 'recipe.id')
.leftJoin('category', 'recipe_category.category_id', 'category.id')
.select(
  'recipe_category.id',
  'category.name as category',
  'recipe.title',
  'recipe.description',
  'recipe.instructions',
)
.whereNull('recipe_category.deleted_at').where({ 'recipe_category.id': id }).first();

/**
 * delete the recipe
 * 
 * @param {number} id - the id of the record to be deleted
 * @returns {Promise<any>} - a promise that resolve when the deletion is completed.
 */
export const destroy = (id: number): Promise<any> => table()
  .update({ deleted_at: pool.raw('CURRENT_TIMESTAMP') }).where({ id });

