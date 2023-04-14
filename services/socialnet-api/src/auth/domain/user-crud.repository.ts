import CRUDRepository from '@app/common/interfaces/crud-repository';
import DBConnect from '@app/common/db/DBConnect';
import { Repository } from 'typeorm';
import { UserDao } from './models/user.dao';
import { UserDto } from './models/user.dto';

class UserCrudRepository implements CRUDRepository<UserDto> {
  private connection: Repository<UserDao> = DBConnect.connect().getRepository(UserDao);

  async findAll(limit = 10, page = 0): Promise<UserDto[]> {
    return DBConnect.connect().getRepository(UserDao).find();
  }

  async create(resource: UserDto): Promise<UserDto> {
    const user: UserDto = await this.connection.create(resource);
    const results = await this.connection.save(user);
    return results;
  }

  async editById(id: number, resource: UserDto): Promise<number> {
    const user = await this.connection.findOneBy({ id });
    if (user) this.connection.merge(user, resource);
    return id;
  }

  async getById(id: number): Promise<UserDto | null> {
    const user = await this.connection.findOneBy({ id });
    return user;
  }

  async deleteById(id: number): Promise<number> {
    await this.connection.delete(id);
    return id;
  }
}

export default new UserCrudRepository();
