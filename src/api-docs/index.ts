import { APP_PORT } from '../constants';
import paths from './path';
import * as schemas from '../validator/schemas';

export default {
  openapi: '3.0.0',
  servers: [{ url: `http://localhost:${APP_PORT}` }],
  info: {
    version: '1.0.0',
    title: 'Web Service/Food Recipe API',
    description: 'The Food Recipe Project is a api-based application designed to provide a platform for users to share and discover culinary recipes. This project aims to create a comprehensive and user-friendly recipe database that allows users to browse, search, and view recipes contributed by an admin',
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
  schemas,
  paths,
};
