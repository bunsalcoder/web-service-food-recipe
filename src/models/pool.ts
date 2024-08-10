import knex from 'knex';
import {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_CLIENT,
    DB_POOL_MAX,
    DB_POOL_MIN,
} from '../constants';
import initPaginate from '../utils/db/paginate';
import initSearch from '../utils/db/search';
import initFind from '../utils/db/find';

const config = {
    client: DB_CLIENT,
    connection: {
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
    },
    pool: {
        min: Number(DB_POOL_MIN || 0),
        max: Number(DB_POOL_MAX || 50),
    },
}

const pool = knex(config);

let QueryBuilder:any;

try {
  QueryBuilder = require('knex/src/query/builder');
} catch (error: any) {
  QueryBuilder = require('knex/lib/query/querybuilder');
}

initPaginate(QueryBuilder);
initSearch(QueryBuilder);
initFind(QueryBuilder);

const createModel = (pool: any, tableName: string) => (trx: any = false) => trx
  ? pool(tableName).transacting(trx)
  : pool(tableName);

export const initModel = (tableName: string) => createModel(pool, tableName);


export default pool;