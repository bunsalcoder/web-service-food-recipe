import { userId, recipeId } from '../validator/schemas';

export default {
    '/favourite': {
      get: {
        tags: ['Favourite'],
        description: 'This endpoint allows you to search for favourite recipe you have added. It returns a list of favourite recipes based on the provided query string (q). Pagination is supported using the page and pageSize parameters.',
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
        tags: ['Favourite'],
        description: 'This endpoint is for adding the recipe to favourite.',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                    userId,
                    recipeId, 
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
    '/favourite/{id}': {
      put: {
        tags: ['Favourite'],
        description: 'This endpoint is for updating the favourite recipe.',
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
                    userId,
                    recipeId, 
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
        tags: ['Favourite'],
        description: 'This endpoint is for removing the recipe from favourite.',
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
    '/favourite/{id}/detail': {
      get: {
        tags: ['Favourite'],
        description: 'This endpoint allows you to get the detail of the favourite recipes.',
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