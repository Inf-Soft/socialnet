export default interface CRUDRepository<M> {
  findAll(limit: number, page: number): Promise<any[]>;
  create(resource: M): Promise<any>;
  editById(id: number, resource: any): Promise<any>;
  getById(id: number): Promise<any>;
  deleteById(id: number): Promise<number>;
}
