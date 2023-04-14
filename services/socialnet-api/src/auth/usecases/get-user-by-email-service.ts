import { UserRepository } from '@app/auth/domain';
import { UserDto } from '../domain/models/user.dto';

class GetUserByEmail {
  async getByEmail(email: string): Promise<UserDto | null> {
    return await UserRepository.getUserByEmail(email);
  }
}

export default new GetUserByEmail();
