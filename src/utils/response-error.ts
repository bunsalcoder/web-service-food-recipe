import type { Response } from 'express';

export const responseError = (res: Response, message: any, statusCode: number = 400) => {
  const objMsg = typeof message === 'string' ? { message } : message;
  const { code = '' } = objMsg;
  const dbErrors: any = {
    23505: 'Data already exists.',
    42703: 'The data entry format was incorrect.',
  };

  return res
    .status(statusCode)
    .send({
      error: true,
      status: statusCode,
      ...objMsg,
      message: dbErrors[code] || (objMsg.message || 'Unexpected error occurs.'),
    });
};