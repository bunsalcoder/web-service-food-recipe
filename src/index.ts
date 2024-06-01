import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import setupSwagger from './swagger';
import knex from 'knex';
import knexConfig from './database/knexfile';

const app = express();
const port = process.env.PORT || 3000;

const db = knex(knexConfig.development);

app.use(express.json());

setupSwagger(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
