import Ajv from 'ajv';
import type { Request, Response, NextFunction } from 'express';
import { senetizeSchemas, senetizeObject } from './schema';

/**
 * @returns array
 */
const anyOfRequiredField:string[] = [];

/**
 * Converts any programming/field case to word separated
 * by space with first letter as Upper Case
 * @param {string} field - String of case
 * @returns string
 */
export const caseToWords = (field: string) => field
  .replace(/([a-z])([A-Z])/g, '$1 $2') // split camelCase => camel Case
  .replace(/[_-]/g, ' ')
  .replace(/\s+/g, ' ') // replace multi space with single one
  .replace(/\b[a-z]/g, (char: string) => char.toUpperCase()) // capitalize text => Text
  .trim(); // remove start/end space

/**
 * Split to get the field name in case the field
 * name as defined in the instancePath field of the
 * AJV error object
 * @param {string} field - The field in instancePath
 * @param {delimiter} delimiter - The field in instancePath
 * @return string - The cleaned field name
 */
const splitField = (field: string, delimiter: string = '/'): string => {
  const fields = field.split(delimiter);
  return fields[fields.length - 1];
};

/**
 * Gets the error field by studyign the
 * error information and identifying the
 * which error field was triggered.
 * @param {any} error - The AJV error object
 * @return string - Field the triigers the error
 */
const getErrorField = (error: any): any => {
  const { params, keyword } = error;
  switch (keyword) {
    case 'required':
      return splitField(params.missingProperty, '.');
    case 'anyOf':
      return 'anyOf';
    default:
      return splitField(error.instancePath, '/');
  }
};

/**
 * Custom error message
 * @param params
 * @param keyword
 * @param message
 * @returns
 */
const customMsg = (params: any, keyword: string, message: string) => {
  const { missingProperty = '' } = params;
  let newMsg = message;
  switch (keyword) {
    case 'required':
      anyOfRequiredField.push(missingProperty);
      const words = caseToWords(missingProperty);
      newMsg = `${words} field is required.`;
      break;
    case 'anyOf':
      newMsg = `Must has anyOf the field ${anyOfRequiredField}`;
      anyOfRequiredField.splice(0, anyOfRequiredField.length);
      break;
    case 'maximum':
      newMsg = message.replace('<=', 'less than or equal to');
      break;
    case 'minimum':
      newMsg = message.replace('>=', 'greater than or equal to');
      break;
    case 'minLength':
      newMsg = message.replace('NOT have fewer than', 'be at least');
      break;
    default: break;
  }

  return newMsg;
};

const getErrorMsg = (error: any) => {
  const {
    instancePath = '',
    params = {},
    keyword = '',
    message,
  } = error;
  const newMessage = customMsg(params, keyword, message);

  if (instancePath === '') return newMessage;
  const errorField = splitField(instancePath, '/');
  return `${caseToWords(errorField)} ${newMessage}`;
};

const getErrors = (errors: any): any => (errors.reduce((acc: any, error: any) => {
  const field = getErrorField(error);
  const message = getErrorMsg(error);
  return { ...acc, [field]: message };
}, {}));

const getRequestData = (req: Request): any => ({
  ...req.body,
  ...req.query,
  ...req.params,
  ...req.headers,
});

const validate = ({
  props,
  ajv,
  schemas,
  request,
}: any): any => {
  const requestData = getRequestData(request);
  const schemaData = senetizeObject(props, schemas);
  const validateData = ajv.compile(schemaData);
  const isValid = validateData(requestData);
  return [isValid, validateData.errors];
};

export default function initValidator(pSchemas: any, options: any = {}): any {
  const schemas = senetizeSchemas(pSchemas);
  const ajv = new Ajv({ coerceTypes: true, ...options });
  return (props: Record<string, any>) => {
    const sources = Object.keys(props);
    return (req: Request, res: Response, next: NextFunction) => {
      if (sources.length === 0) return next();
      const [isValid, errors] = validate({
        props,
        ajv,
        schemas,
        request: req,
      });

      if (isValid) return next();
      return res.status(400).json({
        error: true,
        errors: getErrors(errors),
      });
    };
  };
}
