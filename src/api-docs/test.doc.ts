export default {
  '/test': {
    get: {
      tags: ['Test'],
      description: 'Get test',
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
    },
  }
};