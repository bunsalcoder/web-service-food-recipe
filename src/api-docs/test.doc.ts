export default {
  '/test': {
    get: {
      tags: ['Test'],
      description: 'Get test',
      responses: {
        '200': {
          description: 'Successful response',
        },
      },
    },
  },
  '/test/{id}': {
    get: {
      tags: ['Test'],
      description: 'Get a test details.',
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