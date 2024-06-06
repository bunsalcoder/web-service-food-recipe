import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { initModel } from './pool';
import { JWT_SECRET_KEY } from '../constants';

const table = initModel('user');

/**
 * insert user into the database.
 *
 * @param {Record<string, any>} data - the user data to be inserted into the database.
 * @param {boolean} trx - the transaction object.
 * @returns {Promise<any>} - a promise that resolve when the registeration is completed.
 */
export const register = async (data: Record<string, any>, trx: boolean = false): Promise<any> => {
  const { username, email, password } = data;
  const hashPwd = await bcrypt.hash(password, 10);

  return table().insert({ username, email, password: hashPwd });
}

/**
 * login user to get user token.
 * 
 * @param {Record<string, any>} data - the data to be logged in. 
 * @returns {Promise<any>} - a promise that resolve when login is completed.
 */
export const login = async (data: Record<string, any>): Promise<any> => {
  const { username, password } = data;

  const user = await table().where({ username }).first();
  if (!user) throw new Error('Username is incorrect!');

  const isPwdValid = await bcrypt.compare(password, user.password);
  if (!isPwdValid) throw new Error('Password is incorrect!');

  const token = jwt.sign({
    id: user.id,
    username,
    email: user.email,
    createdAt: user.created_at
  }, JWT_SECRET_KEY, { expiresIn: '1h' });

  return token;
}