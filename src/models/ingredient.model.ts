import pool, { initModel } from "./pool";

const table = initModel('ingredient');

/**
 * search for the ingredient.
 */
export const search = (): Promise<any> => table().whereNull('deleted_at');

/**
 * find a recipe by the provided id.
 *
 * @param {number} id - the id of the recipe to be retrieved. 
 * @returns {Promise<any>} - a promise that resolve when the retrieval is completed.
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
 * update the ingredient
 * 
 * @param {number} id - the id of the record to be updated. 
 * @param {Record<string, any>} data - the data to be updated.
 * @returns {Promise<any>} - the promise that resolve when the update is completed.
 */
export const update = (id: number, data: Record<string, any>)
  : Promise<any> => table().update(data).where({ id });

/**
 * delete the ingredient
 * 
 * @param {number} id - the id of the record to be deleted
 * @returns {Promise<any>} - a promise that resolve when the deletion is completed.
 */
export const destroy = (id: number): Promise<any> => table()
  .update({ deleted_at: pool.raw('CURRENT_TIMESTAMP') }).where({ id });