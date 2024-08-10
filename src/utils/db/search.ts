import { Paging } from './paginate';

export default function search(QBClass: any) {
  QBClass.prototype.search = function (
    q: string,
    fieldsToSearch: string[],
    pagination: Paging = {},
  ) {
    this.where((qb: any) => {
      if ((q || '').trim().length > 0) {
        fieldsToSearch.forEach((field) => {
          qb.orWhereILike(field, `%${q}%`);
        });
      }
    });
    return this.paginate(pagination);
  };
}
