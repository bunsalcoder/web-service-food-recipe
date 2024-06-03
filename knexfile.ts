import type { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_CLIENT,
} from './src/constants';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: DB_CLIENT,
    connection: {
      host: DB_HOST,
      port: Number(DB_PORT),
      database: DB_DATABASE,
      user: DB_USER,
      password: String(DB_PASSWORD)
    },
    migrations: {
      directory: 'src/database/migrations'
    },
    seeds: {
      directory: 'src/database/seeds'
    }
  },
  production: {
    client: DB_CLIENT,
    connection: {
      host: DB_HOST,
      port: Number(DB_PORT),
      database: DB_DATABASE,
      user: DB_USER,
      password: String(DB_PASSWORD)
    },
    migrations: {
      directory: 'src/database/migrations'
    },
    seeds: {
      directory: 'src/database/seeds'
    }
  }
};

export default config;
