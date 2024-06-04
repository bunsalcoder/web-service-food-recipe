import pool, { initModel } from './pool';

const table = initModel('user');

/**
 * Retrive all users from the database.
 * 
 * @return {Promise<any>} - return a promise that resolve to the list of users.
 */
export const search = (
    q: string = '',
    paginate: any = { page: 1, pageSize: 20 },
    filter: any = {},
): Promise<any> => {
    const query = table().select(
        'user.username',
        'user.email',
        'user.is_active',
    );

    if (filter.isActive !== undefined) {
        query.where({ 'user.is_active ': filter.isActive });
    }

    if (q) {
        query.where('user.username', 'like', `%${q}%`)
        .orWhere('user.email', 'like', `%${q}`)
    }

    return query;
}

/**
 * Insert user into user table and return the ID of the inserted record.
 *
 * @param {Record<string, any>} data - the data to be inserted into the table. 
 * @param {any} trx - (optional) the transaction object to use for the insertion.
 * @returns {Promise<number>} - return the id of the inserted record.
 */
export const create = (data: Record<string, any>, trx: any = false)
  : Promise<number> => table(trx).insert(data)
  .returning('id').then(([{ id }]: any) => id);

/**
 * Retrieve a user by the provided id
 *
 * @param {number} id - the ID of the record. 
 * @returns {Promise<any>} - a promise that resolve to the user object.
 */
export const find = (id: number): Promise<any> => table().where({ id }).first();

/**
 * Update a user base on the provided ID.
 * 
 * @param {number} id - the id to update the data.
 * @param {Record<string, any>} data - the data to be updated of the user table.
 * @return {Promise<number>} - return the id of the updated record.
 */
export const update = (id: number, data: Record<string, any>)
  : Promise<number> => table().update(data).where({ id });
