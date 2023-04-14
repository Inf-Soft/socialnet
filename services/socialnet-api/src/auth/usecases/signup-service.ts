import { UserAuthenticationRequestDto } from '@app/auth/api/models';
import { UserCrudRepository } from '@app/auth/domain';
import { UserDto } from '../domain/models/user.dto';

class SignupService {
  async signup(user: UserAuthenticationRequestDto): Promise<UserDto> {
    const userCreated = await UserCrudRepository.create(user);
    return userCreated;
  }
}

export default new SignupService();
