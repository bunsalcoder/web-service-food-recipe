import { categoryId, recipeId } from '../validator/schemas';

export default {
    '/recipe-categories': {
      get: {
        tags: ['Recipe Category'],
        description: 'This endpoint allows you to search for user. It returns a list of user based on the provided query string (q). Pagination is supported using the page and pageSize parameters.',
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
        tags: ['Recipe Category'],
        description: 'This endpoint is for creating the category.',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  categoryId,
                  recipeId
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
    '/recipe-categories/{id}': {
      put: {
        tags: ['Recipe Category'],
        description: 'This endpoint is for updating the category.',
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
                  categoryId,
                  recipeId
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
        tags: ['Recipe Category'],
        description: 'This endpoint is for delete the category.',
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
    '/recipe-categories/{id}/detail': {
      get: {
        tags: ['Recipe Category'],
        description: 'Get a category details.',
        parameters: [
          {
            in: 'path',
            name: 'id',
            type: 'int',
          },
        ],
        responses: {
          '200': {
            description: 'Successful response',
          },
        },
      },
    }
};