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
 * Retrieve a user by the provided id
 *
 * @param {number} id - the ID of the record. 
 * @returns {Promise<any>} - a promise that resolve to the user object.
 */
export const find = (id: number): Promise<any> => table().where({ id }).first();

