const defaultSchema = { type: 'string' };

export const decodeSchemaName = (schemaName: string): [string, boolean] => {
  const [field, isRequired = false] = schemaName.split('*');
  return [field, isRequired !== false];
};

export const senetizeSchemas = (schemaObj: any) => {
  const schemas = Object.keys(schemaObj);
  return schemas.reduce((acc, schema) => ({
    ...acc,
    [schema]: {
      type: 'string',
      ...schemaObj[schema],
    },
  }), {});
};

export const senetizeObject = (props: any, schemas: any) => {
  const { properties } = props;
  const [nextProps, required] = properties.reduce((acc: any, property: string) => {
    const [name, value] = Array.isArray(property) ? property : [property, undefined];

    const [fieldName, isRequired] = decodeSchemaName(name);
    const [accProperties, accRequired] = acc;

    const fieldValue = (value || false)
      ? senetizeObject(value, schemas)
      : (schemas[fieldName] || defaultSchema);

    if (isRequired) accRequired.push(fieldName);

    return [
      {
        ...accProperties,
        [fieldName]: fieldValue,
      },
      accRequired,
    ];
  }, [{}, []]);

  return {
    ...props,
    required,
    properties: nextProps,
    type: 'object',
  };
};
