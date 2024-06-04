import { Request, Response, response } from 'express';
import { responseError } from '../utils/response-error';

import { search, create, find, update } from '../services/user.service';

/**
 * List all active users.
 *
 * @param {Request} req - the request object. 
 * @param {Response} res - the response object.
 * @returns {Promise<any>} - a promise that resolve to the result retrieval.
 */
export const searchActiveUsers = (req: Request, res: Response) => {
    const {
        q = '', page = 1, pageSize = 20, isActive,
    } = req.query;

    const filter = {};

    if (isActive) {
        Object.assign(filter, { isActive: Number(isActive) });
    }

    return search(String(q), { page, pageSize }, filter)
        .then((users: any) => res.json({ users }))
        .catch((error: any) => responseError(res, error));
}

/**
 * Create a user with the provided request and response object.
 * 
 * @param {Request} req - the request object.
 * @param {Response} res - the response object.
 * @return {Promise<any>} - the promise that resolve when the user is sent successfully or reject with an error.
 */
export const createUser = (req: Request, res: Response) => create(req.body)
    .then((id: any) => find(id))
    .then((user: any) => res.json({ user }))
    .catch((error: any) => responseError(res, error));

/**
 * Update a user with the provided id.
 * 
 * @param {Request} req - the request object.
 * @param {Response} res - the response object.
 * @return {Promise<any>} - the promise that resolve when the user is updated successfully or fail.
 */
export const updateUser = (req: Request, res: Response) => {
    const { id } = req.params;

    return update(Number(id), req.body)
        .then(() => find(Number(id)))
        .then((user: any) => res.json({ user }))
        .catch((error: any) => responseError(res, error));
}

/**
 * Retrieve the detail of user base on the given ID.
 *
 * @param {Request} req - the request object.
 * @param {Response} res - the response object. 
 * @returns {Promise<any>} - a promise that resolve to the detail of the detail retrieval.
 */
export const detail = (req: Request, res: Response) => {
    const { id } = req.params;

    return find(Number(id))
        .then((user: any) => res.json({ user }))
        .catch((error: any) => responseError(res, error));
}