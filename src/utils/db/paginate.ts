import { DB_PAGINATION_PAGE_SIZE } from '../../constants';

export type Paging = {
  pageSize?: number,
  page?: number,
};

const getData = (table: any, props: any): any => {
  const { pageSize, page } = props;
  return table
    .limit(pageSize)
    .offset((page - 1) * pageSize)
    .then((result: any) => result);
};

const clearQuery = (table: any) => table
  .clearSelect()
  .clearOrder()
  .count('* as total')
  .offset()
  .first();

const getPagination = (table: any, props: any): any => clearQuery(table)
  .then((result: any = {}) => {
    const { pageSize } = props;
    const { total = 0 } = result;
    const totalPages = Math.ceil(total / pageSize);
    return {
      ...props,
      total: parseInt(total, 10),
      totalPages,
    };
});

export default function initPaginate(QueryBuilder: any) {
  QueryBuilder.prototype.paginate = async function(pProps: Paging = {}) {
    const props = {
      pageSize: DB_PAGINATION_PAGE_SIZE,
      page: 1,
      ...pProps,
    };
    const data = await getData(this, props);
    return getPagination(this.clone(), props).then((pagination: any) => ({
      data,
      pagination,
    }));
  };
}
