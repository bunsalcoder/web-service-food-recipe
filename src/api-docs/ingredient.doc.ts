import { name } from '../validator/schemas';

export default {
    '/ingredient': {
      get: {
        tags: ['Ingredient'],
        description: 'This endpoint allows you to search for ingredient.',
        parameters: [
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
        tags: ['Ingredient'],
        description: 'This endpoint is for creating the ingredient.',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name
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
    '/ingredient/{id}': {
      put: {
        tags: ['Ingredient'],
        description: 'This endpoint is for updating the ingredient.',
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
                  name
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
        tags: ['Ingredient'],
        description: 'This endpoint is for deleteing the ingredient.',
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
    '/ingredient/{id}/detail': {
      get: {
        tags: ['Ingredient'],
        description: 'This endpoint allows you to get the detail of the ingredient.',
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