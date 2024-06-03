import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import apiDocs from './api-docs';

const setupSwagger = (app: Express): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocs));
};

export default setupSwagger;