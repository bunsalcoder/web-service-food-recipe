import { APP_PORT } from '../constants';
import paths from './path';

export default {
  openapi: '3.0.0',
  servers: [{ url: `http://localhost:${APP_PORT}` }],
  info: {
    version: '1.0.0',
    title: 'Web Service/Food Recipe API',
    description: 'The Food Recipe Api',
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  tags: [],
  paths,
};
