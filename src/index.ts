import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import setupSwagger from './swagger';
import knex from 'knex';
import knexConfig from '../knexfile';

import convertRoutes from './utils/convert-route';
import routes from './routes';

const app = express();
const port = process.env.DB_PORT || 5000;

const db = knex(knexConfig.development);

app.use(helmet());
app.use(cors());
app.use(express.json());

setupSwagger(app);

const router = convertRoutes(routes);
app.use(router);

app.listen(port, () => {
  console.log(`[info] Starting application on port ${port}`);
});
