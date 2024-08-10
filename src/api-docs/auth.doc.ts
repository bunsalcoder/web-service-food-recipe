import {
    username,
    email,
    password,
} from '../validator/schemas';

export default {
  '/register': {
    post: {
        tags: ['Auth'],
        description: 'Login',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  username,
                  email,
                  password,
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Successful response',
          },
        },
    },
  },
  '/login': {
    post: {
      tags: ['Auth'],
      description: 'Login',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                username,
                password,
              },
            },
          },
        },
      },
      responses: {
        '200': {
          description: 'Successful response',
        },
      },
    },
  },
};
