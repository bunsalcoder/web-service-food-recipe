import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import setupSwagger from './swagger';
import knex from 'knex';
import knexConfig from '../knexfile';

import routes from './routes';
import registerRouters from './routes/router';
import { APP_PORT } from './constants';

const app = express();
const port = APP_PORT || 5000;

const db = knex(knexConfig.development);

app.use(helmet());
app.use(cors());
app.use(express.json());

registerRouters(app, routes);

setupSwagger(app);

const startServer = (port: number) => {
  const server = app.listen(port, () => {
    console.log(`[info] Starting application on port ${port}`);
    console.log('[x] Application started...');
  });

  server.on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use, trying port ${Number(port) + 1}...`);
      startServer(Number(port) + 1);
    } else {
      console.error('Server error:', err);
    }
  });
};

startServer(APP_PORT);
