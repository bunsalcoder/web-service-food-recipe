import dotenv from 'dotenv';

dotenv.config();

const getEnv = (key: string): string | number => process.env[key] || (() => {
  throw new Error(`The ${key} environment variable is required`);
})();

export const APP_PORT = getEnv('APP_PORT') as number;

export const DB_HOST = getEnv('DB_HOST') as string;
export const DB_PORT = getEnv('DB_PORT') as any;
export const DB_USER = getEnv('DB_USER') as string;
export const DB_PASSWORD = getEnv('DB_PASSWORD') as string;
export const DB_DATABASE = getEnv('DB_DATABASE') as string;