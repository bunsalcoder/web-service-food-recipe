import knex from 'knex';
import {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_CLIENT,
} from '../constants';

const config = {
    client: DB_CLIENT,
    connection: {
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
    }
}

const pool = knex(config);

const createModel = (pool: any, tableName: string) => (trx: any = false) => trx
  ? pool(tableName).transacting(trx)
  : pool(tableName);

export const initModel = (tableName: string) => createModel(pool, tableName);


export default pool;