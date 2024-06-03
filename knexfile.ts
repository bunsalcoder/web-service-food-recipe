import type { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: String(process.env.DB_PASSWORD)
    },
    migrations: {
      directory: 'src/database/migrations'
    },
    seeds: {
      directory: 'src/database/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: String(process.env.DB_PASSWORD)
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
