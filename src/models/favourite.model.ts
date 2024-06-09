import pool, { initModel } from './pool';
const table = initModel('favourite');

/**
 * Retrive all favourite recipe from the database.
 * 
 * @return {Promise<any>} - return a promise that resolve to the list of favourite recipe.
 */
export const search = (
    q: string = '',
    paginate: any = { page: 1, pageSize: 20 },
): Promise<any> => {
    const query = table().select(
        'favourite.id',
        'favourite.recipe_id',
        'favourite.user_id',
        'user.username',
        'recipe.title',
        'recipe.description',
        'recipe.instructions',
    )
    .leftJoin('user', 'favourite.user_id', 'user.id')
    .leftJoin('recipe', 'favourite.recipe_id', 'recipe.id')

    return query;
}

/**
 * Retrieve a favourite recipe by the provided id
 *
 * @param {number} id - the ID of the record. 
 * @returns {Promise<any>} - a promise that resolve to the user object.
 */
export const find = (id: number): Promise<any> => table().where({ id }).first();


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
 * update the favourite recipe
 * 
 * @param {number} id - the id of the record to be updated. 
 * @param {Record<string, any>} data - the data to be updated.
 * @returns {Promise<any>} - the promise that resolve when the update is completed.
 */
export const update = (id: number, data: Record<string, any>)
  : Promise<any> => table().update(data).where({ id });

/**
 * remove the recipe from favourite
 * 
 * @param {number} id - the id of the record to be deleted
 * @returns {Promise<any>} - a promise that resolve when the deletion is completed.
 */
export const destroy = (id: number): Promise<any> => table()
  .update({ deleted_at: pool.raw('CURRENT_TIMESTAMP') }).where({ id });




