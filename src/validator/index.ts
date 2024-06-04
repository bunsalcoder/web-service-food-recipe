import createValidator from '../utils/validator';
import * as schemas from './schemas';

export default createValidator(schemas, { allErrors: true });
