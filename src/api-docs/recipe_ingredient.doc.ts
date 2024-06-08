import { quantity, unit } from '../validator/schemas';

export default {
  '/recipeIngredient': {
    get: {
      tags: ['Recipe Ingredient'],
      description:
        'This endpoint allows you to search for recipe ingredient. It returns a list of recipe based on the provided query string (q). Pagination is supported using the page and pageSize parameters.',
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
      tags: ['Recipe Ingredient'],
      description: 'This endpoint is for creating the recipe ingredient.',
      parameters: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                quantity,
                unit,
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
  '/recipeIngredient/{id}': {
    put: {
      tags: ['Recipe Ingredient'],
      description: 'This endpoint is for updating the recipe ingredient.',
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
                quantity,
                unit,
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
      tags: ['Recipe Ingredient'],
      description: 'This endpoint is for deleteing the recipe ingredient.',
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
  },
  '/recipeIngredient/{id}/detail': {
    get: {
      tags: ['Recipe Ingredient'],
      description:
        'This endpoint allows you to get the detail of the recipe ingredient.',
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
  },
};
