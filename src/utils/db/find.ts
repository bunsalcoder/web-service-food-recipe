export default function initFind(Builder: any) {
    Builder.prototype.find = function(id: number, where: any = {}) {
      return this
        .clone()
        .where({ ...where, id })
        .first();
    };
  
    Builder.prototype.findByField = function(field: string, value: any, where: any = {}) {
      return this
        .clone()
        .where({ ...where, [field]: value })
        .first();
    };
  
    Builder.prototype.exists = function(where: any) {
      return this
        .clone()
        .where(where)
        .first()
        .then((result: any) => !!result);
    };
}