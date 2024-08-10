import { title, description, instructions } from '../validator/schemas';

export default {
    '/recipe': {
      get: {
        tags: ['Recipe'],
        description: 'This endpoint allows you to search for recipe. It returns a list of recipe based on the provided query string (q). Pagination is supported using the page and pageSize parameters.',
        parameters: [
            {
              in: 'query',
              name: 'q',
              type: 'string',
            },
            {
              in: 'query',
              name: 'page',
              type: 'int',
            },
            {
              in: 'query',
              name: 'pageSize',
              type: 'int',
            },
        ],
        responses: {
          '200': {
            description: 'Successful response',
          },
        },
      },
      post: {
        tags: ['Recipe'],
        description: 'This endpoint is for creating the recipe.',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title,
                  description,
                  instructions,
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
      }
    },
    '/recipe/{id}': {
      put: {
        tags: ['Recipe'],
        description: 'This endpoint is for updating the recipe.',
        parameters: [
          {
            in: 'path',
            name: 'id',
            type: 'int',
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title,
                  description,
                  instructions,
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
      delete: {
        tags: ['Recipe'],
        description: 'This endpoint is for deleteing the recipe.',
        parameters: [
          {
            in: 'path',
            name: 'id',
            type: 'int',
          }
        ],
        responses: {
          '200': {
            description: 'Successful response',
          },
        },
      },
    },
    '/recipe/{id}/detail': {
      get: {
        tags: ['Recipe'],
        description: 'This endpoint allows you to get the detail of the recipe.',
        parameters: [
          {
            in: 'path',
            name: 'id',
            type: 'int',
          }
        ],
        responses: {
          '200': {
            description: 'Successful response',
          },
        },
      }
    }
};