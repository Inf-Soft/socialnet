import { Repository } from 'typeorm';
import DBConnect from '@app/common/db/DBConnect';
import { UserDto } from './models/user.dto';
import { UserDao } from './models/user.dao';

class UserRepository {
  private connection: Repository<UserDao> = DBConnect.connect().getRepository(UserDao);

  async getUserByEmail(email: string): Promise<UserDto | null> {
    return await this.connection.findOneBy({ email });
  }
}

export default new UserRepository();
