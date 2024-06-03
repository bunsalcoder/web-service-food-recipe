import { initModel } from './pool';

const table = initModel('test');

export const find = (id: number): Promise<any> => table()
  .where({ id }).first();