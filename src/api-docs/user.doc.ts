export default {
    '/user': {
      get: {
        tags: ['User'],
        description: 'This endpoint allows you to search for user. It returns a list of user based on the provided query string (q). Pagination is supported using the page and pageSize parameters.',
        parameters: [
            {
              in: 'query',
              name: 'q',
              type: 'string',
            },
            {
              in: 'query',
              name: 'isActive',
              type: 'boolean',
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
    },
    '/user/{id}/detail': {
      get: {
        tags: ['User'],
        description: 'Get a user details.',
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